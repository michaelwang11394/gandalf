import logging
import os
import shutil
import uuid

from supabase import Client, create_client

from app.settings import Settings

from fastapi import FastAPI, File, Form, UploadFile
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

from backend.app.experiments.openai_realm_1.base_2 import (
    get_instruction,
    bucket_name,
    supabase,
)

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

settings = Settings()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # TODO: Add AWS
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/gandalf", response_class=JSONResponse)
async def index(
    product: str = Form(...),
    user_input: str = Form(...),
    dom_tree: str = Form(...),
    screenshot: UploadFile = File(...),
    session_id: str = Form(None),
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
        bucket_response = supabase.storage.from_(bucket_name).upload(
            file_path, file_path
        )

        # Retrieve previous state and response if session_id is provided
        previous_screenshot_url = None
        previous_response_instruction = None
        if session_id:
            response = (
                supabase.table("session_data")
                .select("screenshot_url", "response_instruction")
                .eq("session_id", session_id)
                .order("created_at", desc=True)
                .limit(1)
                .execute()
            )
            if response.data:
                previous_screenshot_url = response.data[0].get("screenshot_url")
                previous_response_instruction = response.data[0].get(
                    "response_instruction"
                )

        result = get_instruction(
            product=product,
            dom_tree=dom_tree,
            file_path=file_path,
            user_input=user_input,
            previous_screenshot_url=previous_screenshot_url,
            previous_response_instruction=previous_response_instruction,
        )
        logger.info(f"Result: {result}")

        # Save the current state and response
        if session_id:
            supabase.table("session_data").upsert(
                {
                    "session_id": session_id,
                    "screenshot_url": signed_url["signedURL"],
                    "response_instruction": result,
                }
            ).execute()

        return {"result": result}
    finally:
        # Clean up the temporary file
        os.remove(file_path)
