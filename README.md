# Portfolio Project

A modern, responsive portfolio website built with React and Vite. The frontend features smooth scrolling, dynamic animations, and a sleek design, while the backend is powered by a Node.js/Express server and MongoDB to handle data such as contact forms.

## Features

- **Frontend:** React, Vite, Tailwind CSS
- **Animations:** Framer Motion
- **Smooth Scrolling:** Lenis
- **Routing:** React Router DOM
- **Backend:** Node.js, Express, MongoDB (for handling contacts/messages)
- **Concurrent Execution:** Starts both the Vite frontend and Node server simultaneously in development.

## Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas URI)

## Getting Started

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd check
   ```

2. **Install dependencies:**
   From the root of the project, run:
   ```bash
   npm install
   ```
   *(Note: Make sure to also install backend dependencies if there is a separate `package.json` in the `server` directory, or if they are unified.)*

3. **Set up Environment Variables:**
   Create a `.env` file in the `server` directory and add your MongoDB URI and any other required secrets.
   ```env
   # server/.env
   MONGODB_URI=mongodb://localhost:27017/portfolio
   PORT=5000
   ```

4. **Run the Development Server:**
   This project uses `concurrently` to run both the frontend Vite server and the backend Node server simultaneously.
   ```bash
   npm run dev
   ```
   - The frontend will typically run on `http://localhost:5173`
   - The backend will run on your configured port (e.g., `http://localhost:5000`)

## Build for Production

To create a production build for the frontend:

```bash
npm run build
```

You can then serve the output from the `dist` folder.
