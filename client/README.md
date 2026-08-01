# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Digital Portfolio Builder

A full-stack MERN application that allows users to create, manage, and share their professional portfolios online.

Users can create profiles, add skills, education, experience, and projects, upload resumes, customize themes, and generate a public portfolio link.

---

## 🚀 Features

- User Registration and Login
- JWT Authentication
- Create and Update Profile
- Upload Profile Image
- Upload Resume
- Add Skills
- Add Education Details
- Add Work Experience
- Add Projects
- Dashboard with Portfolio Statistics
- Portfolio Theme Customization
- Public Portfolio Sharing
- Resume Download Option
- Responsive UI Design

---

## 🛠️ Technologies Used

### Frontend
- React.js
- Vite
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer (File Upload)

### Tools
- VS Code
- Postman
- MongoDB Compass
- Git & GitHub

---

## 📂 Project Structure


Digital-Portfolio-Builder

│
├── client
│ ├── src
│ │ ├── components
│ │ ├── pages
│ │ ├── styles
│ │ └── services
│
├── server
│ ├── controllers
│ ├── models
│ ├── routes
│ ├── middleware
│ ├── uploads
│ └── server.js
│
└── README.md

---

## ⚙️ Installation and Setup

### 1. Clone Repository

```bash
git clone <your-github-repository-link>

Backend Setup

Go to server folder:

cd server

Install dependencies:

npm install

Create a .env file:

PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/digitalPortfolioDB

JWT_SECRET=your_secret_key

Start backend server:

npm run dev

Server will run on:

http://localhost:5000
Frontend Setup

Go to client folder:

cd client

Install dependencies:

npm install

Start React application:

npm run dev

Frontend will run on:

http://localhost:5173
🔐 Authentication

The application uses JWT authentication.

After login:

Token is stored in Local Storage
Protected routes require authentication
Users can manage their portfolio securely
📸 Screenshots

(Add your project screenshots here)

Example:

Dashboard Page
Profile Page
Public Portfolio Page
🌐 API Endpoints
Authentication
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login user
Profile
Method	Endpoint	Description
GET	/api/profile	Get profile
POST	/api/profile	Create profile
Skills
Method	Endpoint	Description
GET	/api/skills	Get skills
POST	/api/skills	Add skill
Education
Method	Endpoint	Description
GET	/api/education	Get education
POST	/api/education	Add education
Experience
Method	Endpoint	Description
GET	/api/experience	Get experience
POST	/api/experience	Add experience
Projects
Method	Endpoint	Description
GET	/api/projects	Get projects
POST	/api/projects	Add projects
🔮 Future Enhancements
AI based portfolio suggestions
More portfolio templates
Drag and drop customization
Email sharing feature
Cloud image storage
Admin dashboard
👩‍💻 Author

Gone Manjusri

Full Stack MERN Developer
