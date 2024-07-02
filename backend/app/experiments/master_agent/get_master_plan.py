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
                "You must return the instructions in the correct format or else bad things might happen.\n"
                "Your job is to return the following:\n"
                "1- A list of steps, each containing a step number and an instruction describing how to complete that step.\n"
                '2- You must ONLY return the following JSON format: { "steps": [{ "stepNumber": 1, "instruction": "..." }, { "stepNumber": 2, "instruction": "..." }, ...]} and nothing else.\n'
                "3- Ensure all steps are included in a single JSON structure.\n"
                "4- Only give steps that can be done in the product's interface. Do not provide steps that require code or other external tools.\n"
                "5- Do NOT provide any code snippets or code examples. Just text instructions are great.\n"
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
        model="gpt-4o", messages=messages, temperature=0, timeout=1000
    )

    print(f"Ppenai took {time.time() - start} seconds to retreive the master plan")

    master_plan = response.choices[0].message.content
    master_plan = master_plan.removeprefix("```json\n").removesuffix("\n```")
    return master_plan
