import logging
from fastapi.testclient import TestClient
from app.main import app 

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("uvicorn")

client = TestClient(app)

def test_root():
    print("Testing root endpoint")
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello World"}

def test_gandalf_endpoint():
    # Define the form data and file to be sent
    data = {
        "user_input": "How do I reset my password?",
        "product": "Supabase",
    }

    # Make a POST request to the endpoint using json parameter
    response = client.post("/gandalf", json=data)

    print(f"Gandalf response: {response.json()}")

    # Assert the status code and response data
    assert response.status_code == 200
    assert "result" in response.json()