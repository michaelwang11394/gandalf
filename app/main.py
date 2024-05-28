import logging
from fastapi import FastAPI, File, Request, Form, UploadFile 
from fastapi.responses import JSONResponse

from pydantic import BaseModel, ConfigDict
from pydantic_settings import BaseSettings
from typing import ClassVar, Optional

from openai import OpenAI

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class Settings(BaseSettings):
    OPENAI_API_KEY: str = 'OPENAI_API_KEY'

    Config: ClassVar[ConfigDict] = ConfigDict(env_file='.env')

settings = Settings()

class GandalfRequest(BaseModel):
    product: str
    user_input: str

app = FastAPI()
openai = OpenAI(api_key=settings.OPENAI_API_KEY)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/gandalf", response_class=JSONResponse)
async def index(request: Request):
    data = await request.json()
    logger.info(f"Data: {data}, {data['product']}, {data['user_input']}")
    response = openai.chat.completions.create(
        model = "gpt-4o",
        messages = [
            {"role": "system", "content": f"You are an expert customer support agent for {data['product']}.Answer the customer's questions in a detailed step-by-step manner. Here's their question: {data['user_input']}"}
        ],
        temperature=1.0,
    )
    result = response.choices[0]
    logger.info(f"Result: {result}")
    return {"result": result}
