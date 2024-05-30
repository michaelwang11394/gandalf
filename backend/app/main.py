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
        # Use the public URL in the OpenAI API call
        response = openai.chat.completions.create(
            model="gpt-4o",
            messages=[
                {
                    "role": "system",
                    "content": [
                        {
                            "type": "text",
                            "text": "You are an expert customer support agent for {product}. The user will describe an issue they are facing, a screenshot of their current page and view port, and the HTML domtree of their page.\nYou have one job and you must return it in the correct format or else bad things might happen.\nYour job is to return:\n1- The english text Instruction for the next step they must take to complete their task or solve their issue based on their CURRENT progress, which is given by the screenshot and dom tree. For example, if the screenshot shows the user has not yet entered the necessary information in a required field,  the next step should be to complete that field. If they have completed all required fields, the next step for example is to submit the form by clicking a button. You must be very specific with the step they must take.\n2- Either the classname, id, href, or text selectors of the element they need to click or fill in or take any action on ONLY for the next step they must take to resolve their issue. Again, you are ONLY focused on the NEXT step (1 step) that they must take given their current status to resolve the issue.\nYou must ONLY return the following JSON format, if you don't know any of the fields, just leave it blank: { Instructions: , classname: , id: , href: , text: , }",
                        }
                    ],
                },
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": f"{user_input}. Here's a screenshot of the issue I'm facing.",
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
            ],
            temperature=1.0,
        )
        result = response.choices[0]
        logger.info(f"Result: {result}")
        return {"result": result}
    finally:
        # Clean up the temporary file
        os.remove(file_path)
