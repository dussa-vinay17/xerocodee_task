# My Next.js App 🌐

Welcome to the **My Next.js App**! This application is built with [Next.js](https://nextjs.org/) and follows the MVC (Model-View-Controller) architecture. The app is deployed on Vercel.

## Overview 📋

This project demonstrates the implementation of a web application using the Next.js framework. It includes user authentication (registration and login) and uses Material-UI for the user interface. The backend services are powered by Appwrite.

## Features ✨

- User Registration and Login
- Google and GitHub Authentication
- Secure Handling of User Data
- Responsive UI with Material-UI
- MVC Architecture

## Setup Instructions 🚀

Follow these steps to set up the project locally:

### Prerequisites

- Node.js and npm installed
- Git installed
- Vercel or Netlify account

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone git@github.com:dussa-vinay17/xerocodee_task.git
   cd xerocodee-task

2. **Install dependencies:**
   ```bash
   npm install

3. **Set up Appwrite:**
    1. Install Appwrite on your server or use Appwrite Cloud.
    2. Create a new project in Appwrite and note down the project ID   and API endpoint.
    3. Configure your environment variables in a .env.local file:
    ```env
    NEXT_PUBLIC_APPWRITE_ENDPOINT=https://[YOUR_APPWRITE_ENDPOINT]
    NEXT_PUBLIC_APPWRITE_PROJECT=[YOUR_PROJECT_ID]

4. **Run the development server:**
   ```bash
   npm run dev
   Open http://localhost:3000 to see your application in the browser.

Project Structure 📂
The project follows the MVC architecture to organize code efficiently:

Models 📄
1. Location: models/
2. Purpose: Handles data operations such as fetching from and saving to databases or APIs.

Controllers 🧩
1. Location: controllers/
2. Purpose: Manages business logic, processes requests, interacts with models, and returns data to views.

Views (Pages) 🎨
1. Location: views/ or pages/ (Next.js specific)
2. Purpose: Renders UI components and handles client-side routing.

Components 🛠️
1. Location: components/
2. Purpose: Contains reusable UI components.

Deployment Steps 🚀

Deploying on Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel

2. Deploy the project:
   ```bash
   vercel

Live Demo 🌐
The application is live and can be accessed at: https://my-nextjs-app.vercel.app

Dependencies 📦

Next.js
React
Material-UI
Appwrite
Vercel
Netlify