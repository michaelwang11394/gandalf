import logging
import os
import shutil
import uuid

from supabase import Client, create_client

from app.settings import Settings
from openai import OpenAI

from fastapi import FastAPI, File, Form, UploadFile
from fastapi.responses import JSONResponse

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

settings = Settings()

app = FastAPI()
openai = OpenAI(api_key=settings.OPENAI_API_KEY)
supabase: Client = create_client(settings.SUPABASE_URL, settings.SUPABASE_KEY)


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/gandalf", response_class=JSONResponse)
async def index(
    product: str = Form(...),
    user_input: str = Form(...),
    dom_tree: str = Form(...),
    screenshot: UploadFile = File(...),
    session_id: str = Form(None)
):
    # Save the uploaded file temporarily
    unique_id = uuid.uuid4()
    temp_dir = "temp"
    if not os.path.exists(temp_dir):
        os.makedirs(temp_dir)
    file_path = f"temp/{unique_id}_{screenshot.filename}"
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(screenshot.file, buffer)
    try:
        # Upload to Supabase
        bucket_name = "screenshots"
        bucket_response = supabase.storage.from_(bucket_name).upload(
            file_path, file_path
        )

        # Get the signed URL of the uploaded file
        signed_url = supabase.storage.from_(bucket_name).create_signed_url(
            file_path, 36000
        )

        # Retrieve previous state and response if session_id is provided
        previous_screenshot_url = None
        previous_response_instruction = None
        if session_id:
            response = supabase.table('session_data').select('screenshot_url', 'response_instruction').eq('session_id', session_id).order('created_at', desc=True).limit(1).execute()
            if response.data:
                previous_screenshot_url = response.data[0].get('screenshot_url')
                previous_response_instruction = response.data[0].get('response_instruction')


        # Construct the messages for the OpenAI API call
        messages = [
            {
                "role": "system",
                "content": [
                    {
                        "type": "text",
                        "text": (
                            "You are an expert customer support agent for {product}. The user will describe an issue they are facing, "
                            "a screenshot of their current page and view port, and the HTML domtree of their page. You are also given a screenshot of the previous state/page of the user and the previous response from the llm for the next step the user should follow.\n"
                            "You have one job and you must return it in the correct format or else bad things might happen.\n"
                            "Your job is to return:\n"
                            "1- The english text Instruction for the next step they must take to complete their task or solve their issue based on their CURRENT progress which is given by the screenshot and dom tree. Also, you should consider the most recent state and instruction when giving the user the next step. \n"
                            "For example, if the screenshot shows the user has not yet entered the necessary information in a required field, the next step should be to complete that field. If they have completed all required fields, the next step for example is to submit the form by clicking a button. If they have just completed a step, and the next step is to verify/review default selections that they have the option to modify then you must describe what are the default choices and what their options are. You must be very specific with the step they must take.\n"
                            "2- Either the classname, id, href, or text selectors of the element they need to click or fill in or take any action on ONLY for the next step they must take to resolve their issue. Again, you are ONLY focused on the NEXT step (1 step) that they must take given their current status to resolve the issue.\n"
                            "You must ONLY return the following JSON format, if you don't know any of the fields, just leave it blank: { Instructions: , classname: , id: , href: , text: , }"
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
                        "text": f"Here is the DOM tree of the current page: {dom_tree}.]\n ONLY return the JSON and nothing else",
                    },
                ],
            },
        ]

        # Include previous state and response if available
        if previous_screenshot_url and previous_response_instruction:
            messages[1].insert(0, {
                "type": "text",
                "text": f"The user was previously at this step, shown in this screenshot"
            })
            messages.insert(1, {
                "type": "image_url",
                "image_url": {
                    "url": previous_screenshot_url,
                },
            })
            messages.insert(2, {
                "type": "text",
                "text": f"the llm responded with this instuction for the user to follow: {previous_response_instruction}"
            })

        response = openai.chat.completions.create(
            model="gpt-4o",
            messages=messages,
            temperature=1.0,
        )
        result = response.choices[0]
        logger.info(f"Result: {result}")

        # Save the current state and response
        if session_id:
            supabase.table('session_data').upsert({
                "session_id": session_id,
                "screenshot_url": signed_url["signedURL"],
                "response_instruction": result
            }).execute()

        return {"result": result}
    finally:
        # Clean up the temporary file
        os.remove(file_path)

