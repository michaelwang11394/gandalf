import json
import os
import re
from dotenv import load_dotenv

import openai

load_dotenv()

API_KEY = os.getenv("OPENAI_API_KEY")
openai.api_key = API_KEY


def parse_screen(image_path):
    system_prompt = """
    Analyze this UI screenshot. Identify each UI element, its type (e.g., button, text field, dropdown), and its approximate position (use percentages for top, left, width, and height). Return the information as a JSON array of objects, each with 'type', 'top', 'left', 'width', and 'height' properties.
    Here are two examples of the expected output format:

    [
      {
        "type": "button",
        "top": 10,
        "left": 5,
        "width": 20,
        "height": 8,
        "text": "Submit"
      },
      {
        "type": "text_field",
        "top": 25,
        "left": 5,
        "width": 90,
        "height": 10,
        "placeholder": "Enter your name"
      },
      {
        "type": "dropdown",
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
        content = response.choices[0].message.content
        # Try to extract JSON from the content
        json_match = re.search(r"```json\s*([\s\S]*?)\s*```", content)
        if json_match:
            json_str = json_match.group(1)
            try:
                return json.loads(json_str)
            except json.JSONDecodeError:
                print("Failed to parse extracted JSON")

        # If no JSON found or parsing failed, try parsing the whole content
        try:
            return json.loads(content)
        except json.JSONDecodeError:
            print("Failed to parse content as JSON")
            return [{"type": "text", "content": content}]
    except Exception as e:
        print(f"Error: {e}")
        return [{"type": "error", "content": str(e)}]


def process_screen_elements(image_path):
    screen_elements = parse_screen(image_path)
    processed_elements = []

    def process_element(element, is_interactive=False):
        if isinstance(element, str):
            if element.strip():  # Only add non-empty strings
                processed_elements.append(
                    {
                        "text": element.strip(),
                        "center_top": 0,
                        "center_left": 0,
                        "is_turn_object": is_interactive,
                        "element_type": "text",
                    }
                )
            return

        element_type = element.get("type", "unknown")
        if element_type in ["text", "button", "dropdown", "text_field", "unknown"]:
            text = (
                element.get("content")
                or element.get("text")
                or element.get("placeholder", "")
            )
            if text and text.strip():  # Only add elements with non-empty text
                processed_elements.append(
                    {
                        "text": text.strip(),
                        "center_top": (
                            element.get("top", 0) + element.get("height", 0) / 2
                        ),
                        "center_left": (
                            element.get("left", 0) + element.get("width", 0) / 2
                        ),
                        "is_turn_object": is_interactive
                        or element_type in ["button", "text_field"],
                        "element_type": element_type,
                    }
                )
        elif element_type == "container":
            for sub_element in element.get("content", []):
                process_element(sub_element, is_interactive=True)

    for element in screen_elements:
        process_element(element)

    return processed_elements


def construct_screen_representation(screen_elements):
    processed_elements = process_screen_elements(screen_elements)

    # Sort elements by position
    sorted_elements = sorted(
        processed_elements, key=lambda e: (e["center_top"], e["center_left"])
    )

    # Group elements into rows (you might want to adjust the threshold)
    rows = []
    current_row = []
    last_top = None
    for element in sorted_elements:
        if last_top is None or abs(element["center_top"] - last_top) > 5:
            if current_row:
                rows.append(current_row)
            current_row = [element]
            last_top = element["center_top"]
        else:
            current_row.append(element)
    if current_row:
        rows.append(current_row)

    # Construct the representation
    representation = ""
    for i, row in enumerate(rows):
        row_text = ""
        for element in row:
            text = element["text"]
            if element["is_turn_object"]:
                text = f"{{{{turn_{i+1}. {text}}}}}"
            row_text += f"\t{text}"
        representation += row_text.strip() + "\n"

    print("Representation: ", representation)

    return representation.strip()
