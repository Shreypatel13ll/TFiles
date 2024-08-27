# Basic File Manager

A simple file manager application built using MongoDB, Express, and React with TypeScript. This application allows users to create, view, and manage files and directories within a single-user environment.

## Features
- **Create, View, and Manage Files and Folders**: Basic operations to create, delete, and view files and directories.
- **Nested Folder Structure**: Supports a nested folder structure with recursive operations.
- **Single User**: Designed as a single-user application, not intended for multi-user environments.
- **Scalability**: Loads folder contents dynamically to optimize performance.
- **Backend with Express**: Handles API requests for managing the file system.
- **Frontend with React and TypeScript**: Provides a responsive and interactive UI.
- **State Management with Redux**: Manages the application's state efficiently.

## Installation
### Prerequisites
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [MongoDB](https://www.mongodb.com/) (version 4 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/basic-file-manager.git
   cd basic-file-manager/backend
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables in a `.env` file:
   ```plaintext
   MONGO_URI=<mongo_db_url>
   PORT=3000
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

## Usage
1. After setting up the backend and frontend, open your browser and navigate to `http://localhost:3000` to access the file manager.
2. Use the interface to create, view, and manage files and folders.

## API Endpoints
### Base URL: `/api/v1/file-system`

- **GET `/`:** Retrieve the root folder and its children.
- **GET `/:id`:** Retrieve a specific folder or file by ID, including its children.
- **POST `/`:** Create a new file or folder.
- **PUT `/:id`:** Update the name or content of a file or folder.
- **DELETE `/:id`:** Delete a file or folder.

### Example
```bash
GET /api/v1/file-system/60f71b4a2f4f2a001c8b5e0c
```
Response:
```json
{
    "_id": "60f71b4a2f4f2a001c8b5e0c",
    "name": "Documents",
    "type": "dir",
    "children": [],
    "parent": null,
    "createdOn": "2021-07-20T17:56:58.916Z",
    "lastModified": "2021-07-20T17:56:58.916Z",
    "__v": 0
}
```

## Redux State Management
The frontend uses Redux for state management. The state is structured to hold the root folder, the currently selected file or folder, and any loading or error states.

### State Structure
```typescript
interface FileSystemState {
    root: File | null;
    selectedFile: File | null;
    loading: boolean;
    error: string | null;
}
```

### Actions
- `fetchFolderRequest`: Dispatched when starting to load a folder.
- `fetchFolderSuccess`: Dispatched when a folder is successfully loaded.
- `fetchFolderFailure`: Dispatched when an error occurs while loading a folder.
- `setSelected`: Set current selected file/folder.
