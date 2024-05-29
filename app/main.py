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
        res = supabase.storage.get_bucket(bucket_name)
        logger.info(f"Supabase buckets: {res}")
        response = supabase.storage.from_(bucket_name).upload(file_path, file_path)
        logger.info(f"Supabase response: {response}")

        # Get the signed URL of the uploaded file
        signed_url = supabase.storage.from_(bucket_name).create_signed_url(
            file_path, 36000
        )

        logger.info(f"Signed URL: {signed_url}")

        # Use the public URL in the OpenAI API call
        response = openai.chat.completions.create(
            model="gpt-4o",
            messages=[
                {
                    "role": "system",
                    "content": {
                        "type": "text",
                        "text": f"You are an expert customer support agent for {product}.",
                    },
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
                                # "url": "https://vtkckkrjbnerbwnyustk.supabase.co/storage/v1/object/sign/screenshots/temp/0ada06bc-f351-4a17-92e7-57a783b5c85c_supabase.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzY3JlZW5zaG90cy90ZW1wLzBhZGEwNmJjLWYzNTEtNGExNy05MmU3LTU3YTc4M2I1Yzg1Y19zdXBhYmFzZS5wbmciLCJpYXQiOjE3MTcwMDM0ODgsImV4cCI6MTcxNzAzOTQ4OH0.z1dEm7zfoMFVwbX6KYPE-Du_ovJo3_kYH0KC-fpY9aE"
                                "url": signed_url["signedURL"],
                            },
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
