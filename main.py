from fastapi import FastAPI, File, Request, Form, UploadFile 
from fastapi.responses import JSONResponse
from pydantic import BaseSettings

import openai

class Settings(BaseSettings):
    OPENAI_API_KEY: str = 'OPENAI_API_KEY'

    class Config:
        env_file = '.env'

settings = Settings()
openai.api_key = settings.OPENAI_API_KEY

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/gandalf", response_class=JSONResponse)
def index(request: Request, product: str= Form(...), user_input: str= Form(...), image: UploadFile = File(...)):
    response = openai.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": f"You are an expert customer support agent for {product}.Answer the customer's questions in a detailed step-by-step manner. Here's their question: {user_input}"}
        ],
            
        temperature=1.0,
    )
    result = response.choices[0].text
    return {"request": request, "result": result}
