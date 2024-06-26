import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..')))

import argparse
from app.get_instruction import supabase, bucket_name

def main():
    parser = argparse.ArgumentParser(description='Uploads a screenshot to supabase to prepare for the verify_ai script')
    parser.add_argument('screenshot_path', type=str, help='The path to the screenshot')
    
    args = parser.parse_args()
    file_path = args.screenshot_path
    supabase.storage.from_(bucket_name).upload(
        file_path, file_path
    )

    print(f"supabase path: {file_path}")

if __name__ == "__main__":
    main()