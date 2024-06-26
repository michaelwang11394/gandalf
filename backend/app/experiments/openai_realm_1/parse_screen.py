import os
from dotenv import load_dotenv
from fastapi import logger
import openai

load_dotenv()

API_KEY = os.getenv("OPENAI_API_KEY")
openai.api_key = API_KEY


def parse_screen(image_path):
    system_prompt = """
    Analyze this UI screenshot. Identify each UI element, its type (e.g., button, text field, dropdown), and its approximate position (use percentages for top, left, width, and height). Return the information as a JSON array of objects, each with 'type', 'css_selector, 'top', 'left', 'width', and 'height' properties.
    Here are two examples of the expected output format:

    [
      {
        "type": "button",
        "css_selector": ".class",
        "top": 10,
        "left": 5,
        "width": 20,
        "height": 8,
        "text": "Submit"
      },
      {
        "type": "text_field",
        "css_selector": "[attribute='value']",
        "top": 25,
        "left": 5,
        "width": 90,
        "height": 10,
      },
      {
        "type": "dropdown",
        "css_selector": "#id",
        "top": 40,
        "left": 5,
        "width": 30,
        "height": 8,
        "options": ["Option 1", "Option 2", "Option 3"]
      }
    ]

    Please analyze the provided image and return a similar JSON structure describing the UI elements you identify. Be as accurate as possible with the positions and sizes, and include any relevant text or content for each element.
    """

    try:
        response = openai.chat.completions.create(
            model="gpt-4o",
            messages=[
                {
                    "role": "system",
                    "content": [{"type": "text", "text": system_prompt}],
                },
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "image_url",
                            "image_url": {"url": image_path},
                        }
                    ],
                },
            ],
            temperature=0.0,
        )
        return response.choices[0].message.content
    except Exception as e:
        print(f"Error: {e}")
        return str(e)
