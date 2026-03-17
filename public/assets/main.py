import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Define constants
PROJECT_NAME = os.getenv('PROJECT_NAME')
PROJECT_VERSION = os.getenv('PROJECT_VERSION')

# Define a function to start the application
def start_app():
    # Initialize the application
    print(f"Starting {PROJECT_NAME} version {PROJECT_VERSION}")

    # Start the server
    print("Starting server...")
    # Add server start logic here

    # Start the client
    print("Starting client...")
    # Add client start logic here

# Call the function to start the application
start_app()