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
        "How can I create a new task",
        "How can I delete a task",
        "How can I complete a task",
        "How can I modify a task"
    ]
}

script_path = "backend/app/benchmark"

def main():
    threads = []
    commands = []
    webpages = []
    inputs = []

    for (webpage, user_inputs) in tests.items():
        for user_input in user_inputs:
            webpages.append(webpage)
            inputs.append(user_input)
            commands.append(f"python3 {script_path}/verify_ai.py {script_path}/{webpage}/dom.html {script_path}/{webpage}/screenshot.png \"{user_input}\"")
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
            ai_output['user input'] = user_inputs[index]
            data.append(ai_output)
            
    with open("batched.csv", mode='w', newline='') as file:
        # Create a CSV DictWriter object
        writer = csv.DictWriter(file, fieldnames=["webpage", "user input", "Instructions", "selector", "hasMoreInstructions"])
        
        # Write the header (column names)
        writer.writeheader()
        
        # Write the data rows
        for row in data:
            writer.writerow(row)

if __name__ == "__main__":
    main()