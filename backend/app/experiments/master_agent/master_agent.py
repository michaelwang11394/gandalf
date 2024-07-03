import json
from openai import OpenAI
from supabase import Client, create_client
from app.settings import Settings
from typing import List
import time

from app.experiments.master_agent.get_master_plan import get_master_plan

settings = Settings()
openai = OpenAI(api_key=settings.OPENAI_API_KEY)
supabase: Client = create_client(settings.SUPABASE_URL, settings.SUPABASE_KEY)

bucket_name = "screenshots"


def get_instruction(
    product: str,
    master_plan: str,
    previous_steps: List[str],
    file_path: str,
    user_input: str,
    screen_layout: str,
):
    # Get the signed URL of the uploaded file
    signed_url = supabase.storage.from_(bucket_name).create_signed_url(file_path, 36000)

    print(f"Master plan: {master_plan}")

    # Construct the messages for the OpenAI API call
    messages = [
        {
            "role": "system",
            "content": (
                f"You are an expert customer support agent for {product}. The user will describe an issue they are facing, "
                "and you will be given a screenshot of the user's current page, a json representation of their page that identifies each various ui elements and their approximate position, the steps they have taken so far, and a highly generaalized plan of how to solve the issue but may have accuracy issues.\n"
                "Here is the summarized plan. Please remember that it may be incorrect so you should use your best judgement \n"
                f"{master_plan}"
                "You have one job and you must return it in the correct format or else bad things might happen. Your job is to return the following:\n"
                "1- The text Instruction for the next step they must take to complete their task or solve their issue based on their current progress. You should also consider the most recent state and instructions given in the past when giving the user the next step. \n"
                "2- The itemId of the element they need to click, fill, or take any action on. Again, you are ONLY focused on the NEXT step (1 step) that the user must take, given their current status to resolve the issue.\n"
                "3- A true or false flag 'hasMoreInstructions' indicating whether there are more steps after the current one.\n"
                "4- An updated plan consisting of the remaining steps.\n"
                "5- The plan will most likely be incorrect at specific steps, so you should consider the user's current state and the steps they have taken so far to provide the correct next step. \n"
                "6- Omit actions in the plan that requires going out of the product or are related to docs or tutorials.\n"
                '7- You must ONLY return the following JSON format: { "Instructions": , "itemId": , "hasMoreInstructions": , "actionType": "click" | "fill", "updatedPlan": } and nothing else. No explanation before or after.\n'
                'An example of a properly formatted response would be: { "Instructions": "Click the submit button", "itemId": 3, "hasMoreInstructions": false, "actionType": "click", "updatedPlan": "..." }\n'
            ),
        },
        {
            "role": "user",
            "content": [
                {"type": "text", "text": f"Question: {user_input}"},
                {"type": "text", "text": "Screenshot:"},
                {"type": "image_url", "image_url": {"url": signed_url["signedURL"]}},
                {
                    "type": "text",
                    "text": f"JSON representation of a subset of elements in the current page layout:\n {screen_layout} that should match the screenshot.",
                },
                {
                    "type": "text",
                    "text": f"Current plan: {master_plan}",
                },
            ],
        },
    ]

    # Include previous state and response if available
    # if len(previous_steps) > 0:
    #     messages[1]["content"].append(
    #         {
    #             "type": "text",
    #             "text": f"Steps taken so far: {', '.join(previous_steps)}",
    #         },
    #     )

    start = time.time()
    print("waiting for openai")

    response = openai.chat.completions.create(
        model="gpt-4o", messages=messages, temperature=0
    )

    print(f"openai took {time.time() - start} seconds")

    result = response.choices[0].message.content
    result = result.split("```json\n", 1)[-1].rsplit("\n```", 1)[0]
    return result
