from openai import OpenAI
from app.settings import Settings
from supabase import Client, create_client

settings = Settings()

openai = OpenAI(api_key=settings.OPENAI_API_KEY)
supabase: Client = create_client(settings.SUPABASE_URL, settings.SUPABASE_KEY)

def get_product_context(product: str, user_input: str):
    # manual hack for now
    if product == "Retool":
        return """
When editing a query in the query library, access advanced settings via the 3-dot button next to the run button.

In the app builder, you can preview your current app via the toggle preview button in the top right. However, to actually run the app, click on the run button next to it.

The app builder also provides a debug console, which you can use to test out various JavaScript expressions in the Retool context. Access the debug console via the bottom right 'debug' button.
"""
    if product == "Supabase":
        r = openai.embeddings.create(
            model="text-embedding-3-small",
            input=user_input,
        )
        query_embedding = r.data[0].embedding
        matches = supabase.rpc("match_supabase_documents", {
            "query_embedding": query_embedding,
            # this is way too low
            "match_threshold": 0.3,
        }).select("body").limit(5).execute().data
        result = "\n".join([c["body"] for c in matches])
        print("embedding result:", result)
        if result == "":
            return None
        
    return None