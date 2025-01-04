# To-Do List Project

## Overview
A simple and intuitive To-Do List application to help you stay organized and productive. The app allows users to manage tasks by adding, editing, deleting, and marking tasks as completed.

## Features
- Add, edit, and delete tasks

## Technologies Used
- **React** 
- **Context API**
- **CSS**
- 
## How the Project is Built
The To-Do List app is built by integrating a **REST API** to store and retrieve tasks from a database. This allows users to persist their data and access their tasks even after closing and reopening the application. 

- **REST API Integration**: Tasks are stored in a backend database (e.g., MongoDB, PostgreSQL, etc.) through API calls made using `Axios` or `Fetch`. The API handles operations like adding, updating, deleting, and retrieving tasks.
  
- **Context API**: The application uses React's Context API to manage global state. This allows the app to persist data between components without having to pass props manually. It also helps in syncing data with the backend API, ensuring that the task list is always up to date when accessed by the user.

- **Data Persistence**: When a user adds, deletes, or updates tasks, these changes are sent to the backend server, and the updated task list is displayed. This ensures that tasks are stored permanently, even after the browser is refreshed or the app is closed.



