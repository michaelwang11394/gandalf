from pydantic import ConfigDict
from pydantic_settings import BaseSettings
from typing import ClassVar

class Settings(BaseSettings):
    OPENAI_API_KEY: str = 'OPENAI_API_KEY'
    SUPABASE_URL: str = 'SUPABASE_URL'
    SUPABASE_KEY: str = 'SUPABASE_KEY'
    Config: ClassVar[ConfigDict] = ConfigDict(env_file='.env')