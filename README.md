# My Personal Portfolio
# Welcome to my personal portfolio project! This repository showcases my skills in full-stack web development, featuring a modern React frontend built with Vite and a robust Node.js backend handling functionalities like a contact form.

# ✨ Features
# Responsive Design: A sleek and modern user interface that adapts to various screen sizes (desktop, tablet, mobile).

# Interactive UI: Built with React to provide a dynamic and engaging user experience.

# Contact Form: A functional contact form that allows visitors to send messages directly to me, powered by a Node.js backend.

# Modular Structure: Clearly separated frontend and backend directories for better organization and maintainability.

# 🚀 Technologies Used
# This project leverages a powerful stack of technologies:

# Frontend
# React: A JavaScript library for building user interfaces.

# Vite: A fast build tool for modern web projects, used for rapid development and optimized builds.

# HTML5 & CSS3: For structuring and styling the web content.

# Tailwind CSS (Optional, but common with React/Vite): If you're using Tailwind, you might want to add this.

# Backend
# Node.js: A JavaScript runtime environment for server-side logic.

# Express.js: A fast, unopinionated, minimalist web framework for Node.js, used for building the API.

# Nodemailer (Optional, but common for contact forms): If you're using Nodemailer for email sending, mention it.

# dotenv (Optional): For managing environment variables securely.

# 🛠️ Getting Started
# Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

# Prerequisites
# Before you begin, ensure you have the following installed on your system:

# Git: For cloning the repository.

# Download Git

# Download Node.js (npm is included)

# Installation and Setup
# Clone the repository:
# Open your terminal or command prompt and clone the project to your local machine:

# git clone https://github.com/yada1994/Portfolio.git
# cd Portfolio

# Backend Setup:
# Navigate into the backend directory, install dependencies, and set up environment variables.

# cd backend
# npm install # or yarn install or pnpm install

Create a .env file for the backend:
In the backend directory, create a file named .env and add your environment variables. This file is ignored by Git for security reasons.

# backend/.env
PORT=5000
# Add any other backend-specific environment variables here, e.g., for email service
EMAIL_SERVICE_HOST=smtp.example.com
EMAIL_SERVICE_PORT=587
EMAIL_SERVICE_USER=your_email@example.com
EMAIL_SERVICE_PASS=your_email_password
RECEIVING_EMAIL=your_personal_email@example.com

(You should have a backend/.env.example file in your repo showing these variables with placeholder values.)

Run the backend server:

npm start # or node server.js (or whatever your start script is)

The backend server should now be running, typically on http://localhost:5000.

Frontend Setup:
Open a new terminal window, navigate back to the root of your project, and then into the frontend directory. Install dependencies.

cd ../frontend
npm install # or yarn install or pnpm install

Create a .env file for the frontend (if needed):
If your frontend needs environment variables (e.g., for an API URL), create a .env file in the frontend directory. Vite uses VITE_ prefix for client-side environment variables.

# frontend/.env
VITE_API_URL=http://localhost:5000/api

(You should have a frontend/.env.example file in your repo showing these variables with placeholder values.)

Run the frontend development server:

npm run dev # or yarn dev or pnpm dev

The frontend application should now be running, typically on http://localhost:5173 (Vite's default).

📝 Usage (Contact Form)
Once both the frontend and backend servers are running:

Open your web browser and navigate to the frontend URL (e.g., http://localhost:5173).

Locate the contact form section on the portfolio website.

Fill in the required fields (Name, Email, Message).

Submit the form. The frontend will send a request to your Node.js backend, which will then process the message (e.g., send an email).

Check your backend terminal for logs indicating successful message processing, or your email inbox for the sent message.

📄 License
This project is licensed under the MIT License - see the LICENSE.md file for details.

✉️ Contact
Feel free to reach out if you have any questions or feedback!

GitHub: yada1994

Email: your.email@example.com (Replace with your actual email)