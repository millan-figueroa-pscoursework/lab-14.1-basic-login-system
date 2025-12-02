# Basic Login System – Innovate Inc.

This project is a basic authentication API for the “Innovate Inc.” user portal.  
It provides endpoints for **user registration** and **login** using Node.js, Express, MongoDB, Mongoose, bcrypt, and JSON Web Tokens (JWT).

---

## 🚀 Tech Stack

**Backend**

- Node.js
- Express.js

**Database**

- MongoDB (Local or Atlas)
- Mongoose ORM

**Authentication**

- bcrypt (hashing passwords)
- JSON Web Token (JWT)

**Environment Management**

- dotenv

**Dev Tools**

- nodemon

---

## Features

- Register new users with:
  - Unique username
  - Unique email
  - Hashed password (using bcrypt)
- Log in existing users with:
  - Email and password validation
  - Password comparison (hashed vs incoming)
  - JWT returned on successful login
- Environment-based configuration using `.env`
- Modular Express structure (Models → Controllers → Routes)

---

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB running locally

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd <project-folder>
```

2. Install dependencies:

```bash
npm install
```

3. Running the Project

Start with:

```bash
node server.js
```

Expected output:

```bash
MongoDB connected
Server running on port 3001
```

### Testing (Postman)

Register User

`POST → http://localhost:3001/api/user/register`

Login User

`POST → http://localhost:3001/api/user/login`

Use Body → raw → JSON.
