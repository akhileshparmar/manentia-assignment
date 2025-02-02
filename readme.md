# DICOM Metadata Management

A web application for managing DICOM files and their associated metadata. This application allows users to upload DICOM files, view metadata, and manage user authentication.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
  - [Authentication](#authentication)
  - [DICOM Metadata](#dicom-metadata)
- [Frontend Functionality](#frontend-functionality)
- [Testing Roadmap](#testing-roadmap)
- [License](#license)

## Features

- User registration and login with JWT authentication.
- Upload DICOM files and extract metadata.
- View uploaded DICOM metadata.
- Responsive design for various devices.

## Technologies Used

### Frontend:
- React
- Vite
- Axios
- React Router

### Backend:
- Node.js
- Express
- MongoDB
- Mongoose
- bcryptjs
- jsonwebtoken

### DICOM Parsing:
- dicom-parser

## Setup Instructions

### Backend Setup

1. Clone the Repository:
   ```sh
   git clone <repository-url>
   cd dicom-metadata-management/backend
   ```

2. Install Dependencies:
   ```sh
   npm install
   ```

3. Set Up Environment Variables:
   Create a `.env` file in the backend directory and add the following:
   ```sh
   PORT=<your_backend_port>
   MONGODB_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

4. Run the Backend Server:
   ```sh
   npm start
   ```

### Frontend Setup

1. Navigate to the Frontend Directory:
   ```sh
   cd dicom-metadata-management/frontend
   ```

2. Install Frontend Dependencies:
   ```sh
   npm install
   ```

3. Run the Frontend Development Server:
   ```sh
   npm run dev
   ```

4. Access the Application:
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## API Endpoints

### Authentication

- **POST** `/api/auth/register`
  - Register a new user.
  - **Request Body:** `{ "username": "string", "password": "string" }`

- **POST** `/api/auth/login`
  - Log in an existing user.
  - **Request Body:** `{ "username": "string", "password": "string" }`
  - **Response:** `{ "token": "JWT_TOKEN" }`

### DICOM Metadata

- **POST** `/api/metadata/upload`
  - Upload a DICOM file.
  - **Headers:** `Authorization: Bearer <token>`
  - **Form Data:** `file`

- **GET** `/api/metadata`
  - Retrieve all DICOM metadata.
  - **Headers:** `Authorization: Bearer <token>`

## Frontend Functionality

- **Navigation**
  - **Home Page:** Displays a welcome message and navigation links.
  - **Login Page:** Allows users to log in and store the JWT token in local storage.
  - **Register Page:** Allows new users to register.
  - **Upload Page:** Users can upload DICOM files, which will be processed and stored.
  - **Metadata Page:** Displays a list of uploaded DICOM metadata.

### Token Authentication
The application uses JWT for authentication. The token is stored in local storage after a successful login and is included in the headers of API requests that require authentication.

## Testing Roadmap

- **Home Page:** Verify the welcome message and navigation links.
- **User Registration:** Test registration with a unique username and password.
- **User Login:** Test login with valid credentials and check token storage.
- **Upload DICOM File:** Upload a valid DICOM file and verify success.
- **View Metadata:** Check that uploaded metadata is displayed correctly.
- **Error Handling:** Test invalid inputs and ensure appropriate error messages are shown.
