from pydantic import ConfigDict
from pydantic_settings import BaseSettings
from typing import ClassVar

class Settings(BaseSettings):
    OPENAI_API_KEY: str = 'OPENAI_API_KEY'
    Config: ClassVar[ConfigDict] = ConfigDict(env_file='.env')