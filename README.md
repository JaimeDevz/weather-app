# React & Redux Weather App

A clean and modern weather application that provides real-time weather data for any city. This project demonstrates the use of a React frontend with Redux Toolkit for state management, communicating with a Node.js/Express backend server that securely handles API requests to the OpenWeatherMap API.

![Screenshot of the Weather App](https://github.com/user-attachments/assets/6f8f6479-80e7-4d40-951d-0609bf79eff1)
![Screenshot of the Weather App](https://github.com/user-attachments/assets/8c99d657-b61b-42d9-ba80-051632be6e10)

---

## ✨ Features

-   **City Search**: Get current weather information for any city in the world.
-   **Real-time Data**: Displays current temperature, "feels like" temperature, and weather conditions (e.g., "clear sky," "light rain").
-   **Responsive Design**: A clean user interface that works on both desktop and mobile devices.
-   **Loading & Error States**: Provides clear feedback to the user while fetching data or if an error occurs.
-   **Secure API Handling**: Backend server protects the API key from being exposed on the frontend.

---

## 🛠️ Tech Stack

This project is containing both the frontend and backend code.

#### **Frontend**
-   **React**: A JavaScript library for building user interfaces.
-   **Vite**: A modern, fast frontend build tool.
-   **Redux Toolkit**: The recommended approach for writing Redux logic.
-   **Axios**: A promise-based HTTP client for making API requests.
-   **GSAP (GreenSock Animation Platform)**: A professional-grade JavaScript animation library for creating high-performance animations.
-   **Reactbits**: A collection of custom React components and utilities. *(Note: You can adjust this description if "Reactbits" is a specific library)*

#### **Backend**
-   **Node.js**: A JavaScript runtime environment.
-   **Express.js**: A minimal and flexible Node.js web application framework.
-   **Axios**: For making requests from the server to the external weather API.
-   **dotenv**: For managing environment variables.
-   **CORS**: For enabling Cross-Origin Resource Sharing.

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/en/download/) (version 16.x or higher recommended)
-   [Git](https://git-scm.com/downloads)
-   A free API key from [OpenWeatherMap](https://openweathermap.org/api)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/](https://github.com/)[your-username]/[your-repository-name].git
    cd [your-repository-name]
    ```

2.  **Set up the Backend:**
    ```sh
    # Navigate to the backend directory
    cd backend

    # Install dependencies
    npm install

    # Create a .env file in the 'backend' folder
    # Add your OpenWeatherMap API key to it
    echo "OPENWEATHER_API_KEY=your_actual_api_key" > .env

    # Start the backend server (runs on http://localhost:3000)
    npm start
    ```

3.  **Set up the Frontend:**
    *(Open a new terminal window for this step)*
    ```sh
    # Navigate to the frontend directory from the project root
    cd weather-frontend

    # Install dependencies
    npm install

    # Start the frontend development server (runs on http://localhost:5173 or similar)
    npm run dev
    ```

4.  **Open the App:**
    Open your browser and navigate to the local URL provided by Vite in your terminal. You should now be able to use the application!

---

## 📂 Project Structure

The project is organized into two main directories:

```
├── backend/          # Contains the Node.js/Express server code
│   ├── .env          # Stores the API key securely
│   ├── package.json
│   └── server.js     # Main server file
│
└── weather-frontend/ # Contains the React/Vite client-side code
    ├── public/
    ├── src/          # Main source code for the React app
    ├── package.json
    └── vite.config.js
```


---

## 📄 License

This project is licensed under the MIT License.
