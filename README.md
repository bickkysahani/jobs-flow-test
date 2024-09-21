# Jobs Flow Test

This project consists of a backend built with Django and a frontend built with React. The backend handles user registration and authentication, while the frontend provides a user interface for these functionalities.

## Backend Setup

### Prerequisites

- [Conda](https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html)
- [Python 3.9+](https://www.python.org/downloads/)

### Steps

1. **Create a Conda environment:**

   ```bash
   conda create --name jobs-flow-backend python=3.9
   conda activate jobs-flow-backend

2. **Install the required packages:**

   ```bash
   pip install -r requirements.txt


3. **Run the migrations:**

   ```bash
   python manage.py makemigrations
   python manage.py migrate

4. **Run the server:**

   ```bash
   python manage.py runserver

## Frontend Setup

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- npm (comes with Node.js)


### Steps

1. **Install the required packages:**

   ```bash
   npm install

2. **Run the server:**

   ```bash
    npm run dev

3. **Open the browser and go to `http://localhost:5173/`**




