import logging

from models import GandalfRequest
from settings import Settings
from openai import OpenAI

from fastapi import FastAPI
from fastapi.responses import JSONResponse

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

settings = Settings()

app = FastAPI()
openai = OpenAI(api_key=settings.OPENAI_API_KEY)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/gandalf", response_class=JSONResponse)
async def index(request: GandalfRequest):
    logger.info(f"Data: {request}, {request.product}, {request.user_input}")
    response = openai.chat.completions.create(
        model = "gpt-4o",
        messages = [
            {"role": "system", "content": f"You are an expert customer support agent for {request.product}. Answer the customer's questions in a detailed step-by-step manner. Here's their question: {request.user_input}"}
        ],
        temperature=1.0,
    )
    result = response.choices[0]
    logger.info(f"Result: {result}")
    return {"result": result}
