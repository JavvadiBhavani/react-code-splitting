# Problem Statement: Make a library management app with code splitting based on routing implemented

### 1. Create a new project with 'create-react-app' with appropriate commands.
### 2. Once the project is made, remove all the default code provided and start with a clean slate to make your own components.
### 3. Install react-router to perform the following functionalities with code splitting
- /home - Shows the list of all the books available in library
- /add-books *(lazy loaded)* - Shows a page which as form to add a new book
- /manage-books *(lazy loaded)* - Shows the list of all books, where each book has a button in front of them "Manage". When "Manage" button is clicked, you're routed to "/manage-books/1" where "1" is the bookId.
- /manage-books/:bookId - Shows all the details of books, and has a delete button, which deletes the books and routes to "/manage-books" after deletion.
