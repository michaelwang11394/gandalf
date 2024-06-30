import json
import time
from typing import List

import logging
import os
import shutil
import uuid
import httpx

from supabase import Client, create_client

from app.settings import Settings

from fastapi import FastAPI, File, Form, UploadFile
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from starlette.responses import Response

# OpenAI Realm Experiment 1
# from app.experiments.openai_realm_1.base_2 import (
#     get_instruction,
#     bucket_name,
#     supabase,
# )

# OpenAI Realm Experiment 2
# from app.experiments.openai_realm_2.base_3 import (
from app.experiments.realm_with_js.realm_with_js import (
    get_instruction,
    bucket_name,
    supabase,
)

class TimeoutMiddleware(BaseHTTPMiddleware):
    def __init__(self, app, timeout: int):
        super().__init__(app)
        self.timeout = timeout

    async def dispatch(self, request: Request, call_next):
        try:
            async with httpx.AsyncClient(timeout=self.timeout) as client:
                response = await call_next(request)
                return response
        except httpx.RequestError:
            return Response("Request timed out", status_code=504)

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

settings = Settings()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # TODO: Add AWS
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_middleware(TimeoutMiddleware, timeout=httpx.Timeout(1000))


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/gandalf", response_class=JSONResponse)
async def index(
    product: str = Form(...),
    user_input: str = Form(...),
    screen_layout: str = Form(...),
    screenshot: UploadFile = File(...),
    previous_steps_json: str = Form(...),
):
    print("starting")
    # Save the uploaded file temporarily
    unique_id = uuid.uuid4()
    temp_dir = "temp"
    if not os.path.exists(temp_dir):
        os.makedirs(temp_dir)
    file_path = f"temp/{unique_id}_{screenshot.filename}"
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(screenshot.file, buffer)
    print("saved screenshot")
    try:
        print("uploading screenshot")
        start = time.time()
        # Upload to Supabase
        bucket_response = supabase.storage.from_(bucket_name).upload(
            file_path, file_path
        )
        print(f"uploading screenshot took {time.time() - start} seconds")

        result = get_instruction(
            product=product,
            dom_tree="",
            file_path=file_path,
            user_input=user_input,
            previous_steps=json.loads(previous_steps_json),
            screen_layout=screen_layout,
        )
        logger.info(f"Result: {result}")

        return {"result": result}
    except Exception as e:
        logger.error(f"Error: {e}")
        return {"result": "Error"}
    finally:
        # Clean up the temporary file
        os.remove(file_path)
