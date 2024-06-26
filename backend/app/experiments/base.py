from openai import OpenAI
from supabase import Client, create_client
from app.settings import Settings

settings = Settings()
openai = OpenAI(api_key=settings.OPENAI_API_KEY)
supabase: Client = create_client(settings.SUPABASE_URL, settings.SUPABASE_KEY)

bucket_name = "screenshots"


def get_instruction(
    product: str,
    dom_tree: str,
    file_path: str,
    user_input: str,
    previous_screenshot_url: str,
    previous_response_instruction: str,
):
    # Get the signed URL of the uploaded file
    signed_url = supabase.storage.from_(bucket_name).create_signed_url(file_path, 36000)
    # Construct the messages for the OpenAI API call
    messages = [
        {
            "role": "system",
            "content": [
                {
                    "type": "text",
                    "text": (
                        f"You are an expert customer support agent for {product}. The user will describe an issue they are facing, "
                        "a screenshot of their current page and view port, and the HTML domtree of their page. You are also given a screenshot of the previous state/page of the user and the previous response from the llm for the next step the user should follow.\n"
                        "You have one job and you must return it in the correct format or else bad things might happen.\n"
                        "Your job is to return:\n"
                        "1- The english text Instruction for the next step they must take to complete their task or solve their issue based on their CURRENT progress which is given by the screenshot and dom tree. Also, you should consider the most recent state and instruction when giving the user the next step. \n"
                        "For example, if the screenshot shows the user has not yet entered the necessary information in a required field, the next step should be to complete that field. If they have completed all required fields, the next step for example is to submit the form by clicking a button. If they have just completed a step, and the next step is to verify/review default selections that they have the option to modify then you must describe what are the default choices and what their options are. You must be very specific with the step they must take.\n"
                        "2- The CSS query of the element they need to click or fill in or take any action on ONLY for the next step they must take to resolve their issue. Again, you are ONLY focused on the NEXT step (1 step) that they must take given their current status to resolve the issue.\n"
                        "You must ONLY return the following JSON format, if you don't know any of the fields, just leave it blank: { Instructions: , selector: , }\n"
                        "3- A true or false flag 'hasMoreInstructions' indicating whether there are more steps after the current one.\n"
                        "4- You must ONLY return the following JSON format: { Instructions: , selector: , hasMoreInstructions: }\n"
                        'An example of a properly formatted response would be: { Instructions: "Click the submit button", selector: ".submit-button", hasMoreInstructions: false }\n'
                        "Only return the JSON without wrapping it in anything else."
                    ),
                }
            ],
        },
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": f"{user_input}. Here's a screenshot of the current user's state/issue:",
                },
                {
                    "type": "image_url",
                    "image_url": {
                        "url": signed_url["signedURL"],
                    },
                },
                {
                    "type": "text",
                    "text": f"Here is the html of the current page:\n {dom_tree}.\n ONLY return the JSON and nothing else",
                },
            ],
        },
    ]

    # Include previous state and response if available
    if previous_screenshot_url and previous_response_instruction:
        messages[1].insert(
            0,
            {
                "type": "text",
                "text": f"The user was previously at this step, shown in this screenshot",
            },
        )
        messages.insert(
            1,
            {
                "type": "image_url",
                "image_url": {
                    "url": previous_screenshot_url,
                },
            },
        )
        messages.insert(
            2,
            {
                "type": "text",
                "text": f"the llm responded with this instuction for the user to follow: {previous_response_instruction}",
            },
        )

    response = openai.chat.completions.create(
        model="gpt-4o",
        messages=messages,
        temperature=0,
    )
    return response.choices[0].message.content
