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
        matches = (
            supabase.rpc(
                "hybrid_search",
                {
                    "query_text": user_input,
                    "query_embedding": query_embedding,
                    "match_threshold": 0.7,  # Adjust this value as needed
                    "max_results": 3,  # Adjust this value as needed
                },
            )
            .execute()
            .data
        )

        for match in matches:
            print(
                f"ID: {match['id']}, Similarity: {match['similarity']}, Body: {match['body'][:50]}..."
            )

        result = "\n".join([c["body"] for c in matches])
        if result == "":
            return None
        return result

    return None
