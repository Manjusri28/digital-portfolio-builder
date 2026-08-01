# Digital Portfolio Builder

A full-stack MERN application that enables users to create, customize, and share a professional digital portfolio. Users can manage their profile, skills, education, experience, projects, testimonials, and generate a public portfolio to showcase their work.

---

## Features

- User Authentication (Register/Login using JWT)
- User Profile Management
- Skills Management
- Education Management
- Experience Management
- Project Management
- Portfolio Theme Selection
- Public Portfolio Page
- Analytics Dashboard
- Testimonials Management
- Contact Form
- Resume Upload and Download
- Responsive User Interface

---

## Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Axios
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer (File Upload)

---

## Project Structure

```
digital-portfolio-builder
│
├── client
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── styles
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/Manjusri28/digital-portfolio-builder.git
```

Move into the project folder.

```bash
cd digital-portfolio-builder
```

---

## Install Dependencies

### Client

```bash
cd client
npm install
```

### Server

```bash
cd ../server
npm install
```

---

## Environment Variables

Create a `.env` file inside the **server** folder.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## Run the Application

### Backend

```bash
cd server
npm start
```

### Frontend

```bash
cd client
npm run dev
```

---

## Main Modules

- Authentication
- Dashboard
- Profile
- Skills
- Education
- Experience
- Projects
- Testimonials
- Analytics
- Theme Selection
- Public Portfolio
- Contact Form

---

## API Endpoints

### Authentication

- POST `/api/auth/register`
- POST `/api/auth/login`

### Profile

- GET `/api/profile`
- POST `/api/profile`

### Skills

- GET `/api/skills`
- POST `/api/skills`

### Education

- GET `/api/education`
- POST `/api/education`

### Experience

- GET `/api/experience`
- POST `/api/experience`

### Projects

- GET `/api/projects`
- POST `/api/projects`

### Testimonials

- GET `/api/testimonials`
- POST `/api/testimonials`

### Analytics

- GET `/api/analytics`

### Public Portfolio

- GET `/api/portfolio/:id`

---

## Screenshots

You can add screenshots here.

Example:

```
screenshots/
    dashboard.png
    profile.png
    public-portfolio.png
```

---

## Future Enhancements

- Multiple Portfolio Templates
- Dark/Light Mode
- Portfolio Custom Domain
- Email Notifications
- Social Media Sharing
- Admin Dashboard
- Portfolio PDF Export

---

## Author

**Manjusri Gone**

GitHub:
https://github.com/Manjusri28

---

## License

This project is developed for educational and internship purposes.
