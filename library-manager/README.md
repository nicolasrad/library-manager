# **Book List Application**

This is a web application for managing a collection of books. It allows users to view a list of books, add new books, edit existing books, and delete books from the list. The application is built with **React**, uses **Material UI** for styling, and includes **Playwright** for end-to-end (E2E) testing.

## **Table of Contents**

- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [E2E Testing](#e2e-testing)

## **Installation**

Follow the steps below to set up and run the application locally.

1. **Clone the repository**:

   ```bash
   git clone https://github.com/nicolasrad/library-manager.git
   cd library-manager
   ```

2. **Install dependencies**:

   ```bash
   yarn
   ```

3. **Start the development server**:

   To start the app in development mode, use:

   ```bash
   yarn run start
   ```

   The app should now be running at [http://localhost:3000](http://localhost:3000).

   Also don't forget to run the mocked BE

   ```bash
   cd ..
   cd books_library_app_mock_server
   npm run start
   ```

## **Folder Structure**

The project structure is organized as follows:

```
/book-list-app
├── /public             # Static files
├── /src
│   ├── /components     # React components (e.g., BookList, AddBookForm)
│   ├── /context        # Context providers for app-wide state (e.g., ModalContext)
│   ├── /constants      # Constants that can be used globaly
│   ├── /hooks          #  Custom React hooks for reusable logic
│   ├── /types          # Type definitions (globally)
│   ├── /utils          # Utility/helper methods.
│   ├── /tests          # Playwright E2E test cases
│   ├── App.tsx         # Main app component
│   ├── index.tsx       # Entry point for React
│   └── ...             # Other app-related files
├── playwright.config.ts # Playwright configuration
└── package.json        # App dependencies and scripts
```

## **Features**

- **View Book List**: Displays a list of all books with their title, author, genre, and description.
- **Add New Book**: Opens a modal where users can fill in details about a new book and add it to the list.
- **Edit Existing Book**: Allows users to edit the details of an existing book.
- **Delete Book**: Enables users to delete a book from the list.
- **Responsive Design**: The application is mobile-friendly and adjusts to different screen sizes.

## **Technologies Used**

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: For type safety and better development experience.
- **Material UI (MUI)**: For responsive and modern UI components.
- **SWR**: A React data-fetching library that provides caching, revalidation, and real-time data synchronization, ensuring an efficient and optimized data flow.
- **Playwright**: For E2E testing to ensure the application works as expected in real user scenarios.

## **E2E Testing**

We use **Playwright** for end-to-end testing to ensure the application behaves as expected in different user flows.

### Running Tests

1. **Run all tests**:

   ```bash
   yarn run test
   ```

2. **Run tests in debug mode** (with the browser UI visible):

   ```bash
   yarn run test:debug
   ```

3. **Test flows include**:
   - Loading the book list page.
   - Adding a new book.
   - Editing an existing book.
   - Deleting a book.

Tests run perfectly with NodeJs version 20.17.0
