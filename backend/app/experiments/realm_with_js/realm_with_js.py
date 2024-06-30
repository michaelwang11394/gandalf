from openai import OpenAI
from supabase import Client, create_client
from app.settings import Settings
from app.product_context.get_product_context import get_product_context
from typing import List
import time

settings = Settings()
openai = OpenAI(api_key=settings.OPENAI_API_KEY)
supabase: Client = create_client(settings.SUPABASE_URL, settings.SUPABASE_KEY)

bucket_name = "screenshots"


def get_instruction(
    product: str,
    dom_tree: str,
    previous_steps: List[str],
    file_path: str,
    user_input: str,
    screen_layout: str,
):
    # Get the signed URL of the uploaded file
    signed_url = supabase.storage.from_(bucket_name).create_signed_url(file_path, 36000)

    # Construct the messages for the OpenAI API call
    messages = [
        {
            "role": "system",
            "content": (
                f"You are an expert customer support agent for {product}. The user will describe an issue they are facing, "
                "and you will be given a screenshot of the user's current page, a json representation of their page that identifies each various ui elements and their approximate position as well as the steps they have taken so far.\n"
                "You have one job and you must return it in the correct format or else bad things might happen.\n"
                "Your job is to return:\n"
                "1- The english text Instruction for the next step they must take to complete their task or solve their issue based on their current progress. Also, you should consider the most recent state and instruction when giving the user the next step. \n"
                "2- The itemId of the element they need to click or fill in or take any action on. Again, you are ONLY focused on the NEXT step (1 step) that they must take given their current status to resolve the issue.\n"
                "3- A true or false flag 'hasMoreInstructions' indicating whether there are more steps after the current one.\n"
                "4- You must ONLY return the following JSON format: { \"Instructions\": , \"itemId\": , \"hasMoreInstructions\": } and nothing else.\n"
                "An example of a properly formatted response would be: { \"Instructions\": \"Click the submit button\", \"itemId\": 3, \"hasMoreInstructions\": false }\n"
            ),
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
                    "text": f"Here is the JSON representation of a subset of elements of the current page layout:\n {screen_layout} that should match the screenshot.",
                },
            ],
        },
    ]

    product_context = get_product_context(product=product, user_input=user_input)

    # Include previous state and response if available
    if len(previous_steps) > 0:
        messages[1]["content"].append(
            {
                "type": "text",
                "text": f"Steps taken so far: {', '.join(previous_steps)}",
            },
        )
        
    if product_context is not None:
        messages[1]["content"].append(f"Here's the relevant extract from the product manual: {product_context}")
        
    start = time.time()
    print("waiting for openai")

    response = openai.chat.completions.create(
        model="gpt-4o",
        messages=messages,
        temperature=0,
        timeout=1000
    )
    
    print(f"openai took {time.time() - start} seconds")
    
    result = response.choices[0].message.content
    result = result.removeprefix("```json\n").removesuffix("\n```")
    return result 
