# Project Setup Instructions

## Getting Started

To get this project up and running on your local machine for the backend and frontend, follow these steps:

### 1. Activate the Virtual Environment

Ensure you have a virtual environment set up for Python. You can activate the one in this folder by using:

`source backend/venv/bin/activate`

### 2. Install Requirements

Install all the required packages using the following command:

`pip install -r requirements.txt`

### 3. Run the Application

Start the FastAPI development server by running:

`fastapi dev backend/app/main.py`

This command will start the server in development mode, automatically reloading the server whenever you make changes to the code.

### 4. Start the FE

For the purposes of testing, we have a simple todo test app. To start the app,

`cd test-app`
`yarn dev`

## NPM Deployment

To build and deploy the package:

1. First bump the package version in frontend/package.json
2. `yarn build`
3. `yarn npm publish`
