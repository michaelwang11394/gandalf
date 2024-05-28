import logging
import os
import shutil
import uuid

from supabase import Client, create_client


from settings import Settings
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

        # Get the public URL of the uploaded file
        public_url = supabase.storage.from_(bucket_name).create_signed_url(
            file_path, 3600
        )

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
                        {"type": "image_url", "image_url": {"url": f"{public_url}"}},
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
