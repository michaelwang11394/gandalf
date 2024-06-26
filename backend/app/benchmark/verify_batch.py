import subprocess
import threading
import json
import csv

def run_command(command, results, index):
    process = subprocess.Popen(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
    stdout, stderr = process.communicate()
    results[index] = {'stdout': stdout.decode('utf-8'), 'stderr': stderr.decode('utf-8')}


tests = {
    "simple": [
        ("How can I create a new task", "input[placeholder='Write your next task']"),
        ("How can I delete a task", "#delete-todo-button"),
        ("How can I complete a task", ".todo_items_left"),
        ("How can I modify a task", "#edit-todo-button")
    ],
    "github": [
        ("How can I search in the codebase?", ".header-search-button"),
        ("How can I download the codebase?", ".types__StyledButton-sc-ws60qy-0.kHdfWW"),
        ("How can I switch branches?", "button[aria-label='main branch']"),
        ("How can I see all the forks?", "#fork-button")
    ],
    "stack_overflow": [
        ("Upvote the first answer", "#answer-19328891 .js-vote-up-btn"),
        ("Post my own answer", "#post-editor"),
        ("Sort the answers by recency", "#answer-sort-dropdown-select-menu")
    ],
    "retool_query": [
        ("How can I adjust the query timeouts?", "[data-testid='QueryPlayground::Dropdown_button']"),
        ("How can I make the query available for use in apps?", "#query-library-share-button button"),
        ("How to change the name of the query?", "[data-testid='QueryPlayground::QueryName::static']")
    ],
    "retool_app_builder": [
        ("How can I preview my app?", "[data-testid='EditorControls::ModeOption_preview']"), # or [aria-label='Toggle preview mode']
        ("How can I run the app for real?", "[aria-label='Navigate to app in user mode']"),
        ("How can I test out an expression?", "#DebugButton"),
        ("How can I add some complicated logic in code?", "[data-testid='EditorSidebarMenuItem::Code']"),
        ("how can I build a dashboard for my company forecast?", "[data-testid='WidgetPicker:PlotlyChartWidget']")
    ]
}

script_path = "backend/app/benchmark"

def main():
    threads = []
    commands = []
    webpages = []
    inputs = []
    expected_selectors = []

    for (webpage, user_inputs) in tests.items():
        for (user_input, expected) in user_inputs:
            for i in range(10):
                webpages.append(webpage)
                inputs.append(user_input)
                expected_selectors.append(expected)
                commands.append(f"python3 {script_path}/verify_ai.py {script_path}/{webpage}/dom.html {script_path}/{webpage}/list.json {script_path}/{webpage}/screenshot.png \"{user_input}\" realmjs")
    print("Running these commands:")
    print("\n".join(commands))

    results = [None] * len(commands)
    
    for i, command in enumerate(commands):
        thread = threading.Thread(target=run_command, args=(command, results, i))
        threads.append(thread)
        thread.start()

    for thread in threads:
        thread.join()
    
    data = []
    for index, r in enumerate(results):
        if r['stderr'] != '':
            print(f"Error running {commands[index]}: {r['stderr']}")
        else:
            print(f"parsing {r['stdout']}")
            ai_output = json.loads(r['stdout'])
            ai_output['webpage'] = webpages[index]
            ai_output['user input'] = inputs[index]
            ai_output['expected selector'] = expected_selectors[index]
            data.append(ai_output)
            
    with open("batched.csv", mode='w', newline='') as file:
        # Create a CSV DictWriter object
        writer = csv.DictWriter(file, fieldnames=["webpage", "user input", "Instructions", "selector", "expected selector", "hasMoreInstructions"])
        
        # Write the header (column names)
        writer.writeheader()
        
        # Write the data rows
        for row in data:
            writer.writerow(row)

if __name__ == "__main__":
    main()