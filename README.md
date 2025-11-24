1. Project Concept: 

The name of my project is Book Library Management API. It is a back-end application that will assist libraries in controlling their books, members, and borrowing records. The system is going to be a tool that will make the staff's job easier to know the availability of books, the identity of the borrower, and the return date. To add a layer of security to the login of the administrators and staff, Firebase Authentication will be used.

The idea was very much appealing to me because library systems represent an easy-to-comprehend real-world scenario where CRUD operations, authentication, and automation coexist in a meaningful way. Besides that, it is a perfect opportunity to practice what we have been taught concerning back-end architecture, validation, and API design.

2. Scope and Functionality:

The major resources in the API are as follows:

- Books: Manage all aspects of books including their information (title, author, genre, ISBN, and availability) such as adding, editing, deleting, and viewing.
- Members: Let member management embrace variety in member data like name, email, and membership ID.
- Borrows: Have all the records of borrowed books, due dates, and the return status.

Proposed Endpoints

/api/books → Book CRUD operations
/api/members → CRUD operations for managing members
/api/borrows → Overseeing the borrowing and returning of books

Data Storage
The entire data will reside in Firebase Firestore which will have distinct collections for books, members, borrows.

3. Course Content Alignment:

This project directly applies tools and concepts from the course, including:

- Node.js, TypeScript, and Express — for building a RESTful back-end
- Firebase Firestore — for database storage
- Firebase Authentication — for secure login and roles
- Jest — for testing
- Swagger/OpenAPI — for API documentation
-  GitHub — for version control and project management

4. GitHub Project Setup:

A GitHub repository called Book Library API is going to be created by me. The main branch will represent the final version and the development branch will be used for work in progress. Additionally, I will set up a GitHub Project Board for monitoring progress which will have three columns namely “To Do,” “In Progress,” and “Done.” Every task (for example, setting up routes, authentication or validation) will be created as an issue and connected to the commits. I will utilize this configuration to maintain order through every project milestone.
Branches:
main → final version
development → ongoing work

Project Milestones:

Milestone 1: Setup & Initial Development

Set up environment and project structure
Create database schema
Implement basic CRUD operations for books, members, borrows
Add Swagger documentation
Research a new back-end feature
Write basic unit tests

Milestone 2: Sprint Demo & Feature Integration

Improve CRUD operations
Integrate new feature 
Make a working MVP for demo
Test key functionalities

Milestone 3: Final Touches & Completion

Add advanced features (filtering, sorting, validation)
Ensure secure authentication and role-based access
Update Swagger docs
Complete testing and polish the project