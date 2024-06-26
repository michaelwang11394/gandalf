import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..')))

import argparse
from app.get_instruction import get_instruction

def main():
    parser = argparse.ArgumentParser(description='Runs the instructions code')
    parser.add_argument('html_file', type=str, help='The local html file with the DOM tree to be sent to the server (not the original html)')
    parser.add_argument('screenshot_path_in_supabase', type=str, help='The screenshot path in supabase')
    parser.add_argument('user_input', type=str, help='The user input string')
    
    args = parser.parse_args()

    with open(args.html_file, 'r') as file:
        dom_tree = file.read()
    
    result = get_instruction(
        product="supabase",
        dom_tree=dom_tree,
        file_path=args.screenshot_path_in_supabase,
        user_input=args.user_input,
        previous_screenshot_url=None,
        previous_response_instruction=None
    )
    print(result)

if __name__ == "__main__":
    main()