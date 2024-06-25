import os
from dotenv import load_dotenv
import replicate
from PIL import Image
import base64
from io import BytesIO

# Load environment variables from .env file
load_dotenv()

# Get the Replicate API token from the .env file
REPLICATE_API_TOKEN = os.getenv("REPLICATE_API_TOKEN")

if not REPLICATE_API_TOKEN:
    raise ValueError(
        "REPLICATE_API_TOKEN is not set in the .env file. Please set it before running this script."
    )

# Set the API token for the replicate library
os.environ["REPLICATE_API_TOKEN"] = REPLICATE_API_TOKEN


def detect_ui_elements(image_uri: str, prompt: str):
    # Call the Replicate API
    output = replicate.run(
        "cjwbw/pix2struct:e32d77481424b47e7959836638b62082d8528b0c66a3a30eedca3970aaf786e7",
        input={"image": image_uri, "text": prompt},
    )

    return output


if __name__ == "__main__":
    image_uri = "https://vtkckkrjbnerbwnyustk.supabase.co/storage/v1/object/sign/screenshots/temp/f8c55a1e-c441-48d8-93eb-66eb5587a678_supabase%20.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzY3JlZW5zaG90cy90ZW1wL2Y4YzU1YTFlLWM0NDEtNDhkOC05M2ViLTY2ZWI1NTg3YTY3OF9zdXBhYmFzZSAucG5nIiwiaWF0IjoxNzE5MjczOTUzLCJleHAiOjE3MjE4NjU5NTN9.Wio8J2AZfUqKrnbIqyTz8Roa1qr6sRLXHZtBuf7TC_4&t=2024-06-25T00%3A05%3A53.978Z"
    prompt = (
        "Describe the UI elements in this image, including their types and positions."
    )

    description = detect_ui_elements(image_uri, prompt)
    print(description)
