Book Library Management API

This project is a backend API for managing a library.
It helps you:
Add and update books
Manage members
Track who borrowed a book
Protect routes using Firebase Authentication
Allow only admins or staff to access certain actions
The goal is to make library work easier and more organized.

Download the project:
git clone https://github.com/komalpreetkaur90/back_end_final_project.git

Start the server:
npm run dev
npm Start

API will run at:
http://localhost:3000

API Request Examples
Add a new book: POST /api/v1/books
Body example:
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Classic",
  "publishedYear": 1925,
  "availableCopies": 3
}

Public API Documentation:
https://komalpreetkaur90.github.io/back_end_final_project/

View Local Documentation
http://localhost:3000/api-docs

To rebuild the docs manually:
npm run generate-docs
It will create:
docs/index.html