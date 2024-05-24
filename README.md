# Library Management System

Welcome to the Library Management System project for the PraisElite Coding Assessment. This project includes a backend developed in Python Django for managing books and borrowers, and a frontend developed in React for interacting with the API.

## Project Structure

The project is divided into two main parts:
- Backend: `LibraryManagement` (Django)
- Frontend: `LibraryManagementUI` (React)

## Backend Setup (Django)

### Requirements

- Python 3.12.2
- Django 3.9.0
- Django REST Framework

### Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Tanmay502/Library_Management.gitt
   cd LibraryManagement

   python -m venv venv
source venv/bin/activate 

The following REST API endpoints are available:

Books:

POST /api/books/ - Create a new book
GET /api/books/ - Retrieve a list of all books
GET /api/books/{id}/ - Retrieve details of a specific book
PUT /api/books/{id}/ - Update an existing book
DELETE /api/books/{id}/ - Delete a book
Borrowers:

POST /api/borrowers/ - Create a new borrower
GET /api/borrowers/ - Retrieve a list of all borrowers
GET /api/borrowers/{id}/ - Retrieve details of a specific borrower
PUT /api/borrowers/{id}/ - Update an existing borrower
DELETE /api/borrowers/{id}/ - Delete a borrower
Borrow/Return Books:

POST /api/books/{id}/borrow/ - Borrow a book
POST /api/books/{id}/return/ - Return a borrowed book
Frontend Setup (React)
Requirements
Node.js
npm (Node Package Manager)
Setup Instructions
Navigate to the frontend directory:

bash
Copy code
cd LibraryManagementUI
Install the required packages:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Components
The following components are available in the frontend:

Books:

BookList - Displaying a list of books
BookDetail - Displaying details of a book
BookForm - Creating/updating a book
Borrowers:

BorrowerList - Displaying a list of borrowers
BorrowerDetail - Displaying details of a borrower
BorrowerForm - Creating/updating a borrower
Borrow/Return Books:

BorrowBook - Borrowing a book
ReturnBook - Returning a book
