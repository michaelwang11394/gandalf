from typing import Optional
from fastapi import UploadFile
from pydantic import BaseModel, HttpUrl

class GandalfRequest(BaseModel):
    product: str
    user_input: str
    image: Optional[UploadFile | HttpUrl ]