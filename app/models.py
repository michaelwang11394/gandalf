from pydantic import BaseModel

class GandalfRequest(BaseModel):
    product: str
    user_input: str