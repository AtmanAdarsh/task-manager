# Task Manager Web Application

## Overview

This is a simple yet powerful web application for managing tasks. It allows users to add, mark, delete, and filter tasks. The application is built using HTML, CSS, and JavaScript with localStorage to persist tasks across page reloads.

---

## Features

1. **Add Tasks**

   - Enter a new task in the input field and click the "Add Task" button.
   - The task will appear in the task list.

2. **Mark as Complete**

   - Click the green "✔" button next to a task to toggle its completion status.
   - Completed tasks are displayed with a strikethrough.

3. **Delete Tasks**

   - Click the red "✖" button next to a task to remove it from the list.

4. **Filter Tasks**

   - Use the "All", "Completed", and "Pending" buttons to filter tasks dynamically.

5. **Data Persistence**

   - Tasks are saved in the browser's `localStorage`, ensuring they persist even after the page is refreshed.

---

## File Structure

```
project-directory/
├── index.html     # The main HTML file
├── styles.css     # The CSS file for styling
├── script.js      # The JavaScript file for logic
```

---

## Installation and Usage

1. Clone the repository:

   ```bash
   git clone <https://github.com/AtmanAdarsh/task-manager>
   ```

2. Navigate to the project directory:

   ```bash
   cd project-directory
   ```

3. Open `index.html` in a web browser.

---

## Code Explanation

### HTML (`index.html`)

- Provides the structure of the application.
- Includes elements for task input, buttons, and the task list.
- Links the external CSS and JavaScript files.

### CSS (`styles.css`)

- Styles the application to provide a clean and user-friendly interface.
- Includes responsive design for smaller screens.
- Highlights active filter buttons and differentiates completed tasks.

### JavaScript (`script.js`)

- Implements the application's functionality:
  - **Adding tasks**: Captures user input and appends tasks to the list.
  - **Marking tasks as complete**: Toggles the task's completion status.
  - **Deleting tasks**: Removes the task from the list.
  - **Filtering tasks**: Dynamically filters tasks based on their status.
  - **Data persistence**: Saves tasks in `localStorage` for persistence.

---

## How It Works

1. **Adding a Task**:

   - User enters a task in the input box and clicks "Add Task".
   - The task is saved in memory and displayed in the task list.

2. **Marking as Complete**:

   - Clicking the "✔" button toggles the task's `completed` property and updates the UI.

3. **Deleting a Task**:

   - Clicking the "✖" button removes the task from memory and updates the list.

4. **Filtering Tasks**:

   - Filter buttons (All, Completed, Pending) dynamically filter tasks based on their status.

5. **Data Persistence**:

   - Tasks are stored in `localStorage` to persist them between page reloads.

---

## Future Enhancements

- Add task deadlines and sort tasks by date.
- Implement categories for functions (e.g., Work, Personal).
- Include a search bar to filter tasks by keywords.
- Add user authentication for multi-user support.
- Implement a dark mode toggle.

---

## License

This project is open-source and available under the MIT License.

By Adarsh Singh
