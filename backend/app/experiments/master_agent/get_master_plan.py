import json
from openai import OpenAI
from supabase import Client, create_client
from app.settings import Settings
from app.product_context.get_product_context import get_product_context
from typing import List
import time

settings = Settings()
openai = OpenAI(api_key=settings.OPENAI_API_KEY)
supabase: Client = create_client(settings.SUPABASE_URL, settings.SUPABASE_KEY)


def get_master_plan(product: str, user_input: str):

    # Construct the messages for the OpenAI API call
    product_context = get_product_context(product=product, user_input=user_input)

    messages = [
        {
            "role": "system",
            "content": (
                f"You are an expert customer support agent for {product}. The user will describe an issue they are facing, and you will be given relevent product context from documentation. Return for the user a complete set of instructions to fix the issue. \n"
                "Your job is to return a summarized plan consisting of only the actions that the user can take in the product web app to resolve their issue.\n"
                "Do so in 2 steps. In the first step, come up with all of the relevant instructions. In the second step, extract the instructions that can be performed within the product's web interface, which should exclude code samples and exclude links to tutorials or docs.\n"
            ),
        },
        {
            "role": "user",
            "content": f"Here is my question: {user_input}",
        },
    ]

    if product_context is not None:
        messages[0][
            "content"
        ] += f"Here is some relevant context pulled from the product documentation: {product_context}"

    start = time.time()
    print("Getting master plan...")

    response = openai.chat.completions.create(
        model="gpt-4o",
        messages=messages,
        functions=[
            {
                "name": "format_master_plan",
                "description": "Generate a master plan with complete instructions and extracted web app steps",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "complete_instructions": {
                            "type": "array",
                            "items": {"type": "string"},
                            "description": "An array of all relevant instructions to resolve the user's issue",
                        },
                        "web_app_steps": {
                            "type": "array",
                            "items": {"type": "string"},
                            "description": "An array of steps that can be performed within the product's web interface, which should exclude code samples and exclude links to tutorials or docs.",
                        },
                    },
                    "required": ["complete_instructions", "web_app_steps"],
                },
            }
        ],
        function_call={"name": "format_master_plan"},
        temperature=0,
        timeout=1000,
    )

    print(f"Openai took {time.time() - start} seconds to retreive the master plan")

    function_response = response.choices[0].message.function_call
    if function_response and function_response.name == "format_master_plan":
        master_plan = json.loads(function_response.arguments)
        web_app_steps = master_plan.get("web_app_steps", [])
        return web_app_steps
    else:
        print("No function response found for master plan")
        return ""
