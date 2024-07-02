import json
import time
from typing import List

import logging
import os
import shutil
import uuid
import httpx
import io

from supabase import Client, create_client

from app.settings import Settings

from fastapi import FastAPI, File, Form, UploadFile
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from starlette.responses import Response

from mangum import Mangum

# from app.experiments.realm_with_js.realm_with_js import (
#     get_instruction,
#     bucket_name,
#     supabase,
# )

from app.experiments.master_agent.master_agent import (
    get_instruction,
    bucket_name,
    supabase,
)
from app.experiments.master_agent.get_master_plan import get_master_plan


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
    file_path = f"temp/{unique_id}_{screenshot.filename}"

    # Get master plan for the product
    master_plan = get_master_plan(product=product, user_input=user_input)

    try:
        print(f"uploading screenshot {file_path}")
        start = time.time()
        # Upload to Supabase
        bytes = screenshot.file.read()
        print("byte size", len(bytes))
        bucket_response = supabase.storage.from_(bucket_name).upload(file_path, bytes)
        print(f"uploading screenshot took {time.time() - start} seconds")

        result = get_instruction(
            product=product,
            master_plan=master_plan,
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


@app.api_route("/{path_name:path}", methods=["GET"])
async def catch_all(request: Request, path_name: str):
    return {"request_method": request.method, "path_name": path_name}


handler = Mangum(app, api_gateway_base_path="/gandalf_api")
