# Weather & Map Forecast App 🌦️🗺️

This is a modern, responsive weather forecast application built with React. It uses the browser's Geolocation API to determine the user's current location, fetches real-time weather data from the OpenWeatherMap API, and displays the location on a beautiful, interactive map powered by Leaflet.


---

## ✨ Features

-   **Automatic Geolocation**: Detects the user's current location upon loading.
-   **Real-Time Weather Data**: Fetches and displays current weather conditions, including temperature, humidity, wind speed, and a weather icon.
-   **Interactive Map**: Shows the user's location with a marker on an interactive map from OpenStreetMap via Leaflet.
-   **Clean & Modern UI**: A simple, user-friendly interface to display complex data clearly.
-   **Secure API Key Handling**: Uses a `.env` file to securely manage the API key, keeping it out of the public codebase.

---

## 🛠️ Tech Stack

-   **Frontend**:
    -   [React.js](https://reactjs.org/) (UI Library)
    -   [Axios](https://axios-http.com/) (for making API requests)
-   **Mapping**:
    -   [Leaflet](https://leafletjs.com/) (an open-source JavaScript library for interactive maps)
    -   [React-Leaflet](https://react-leaflet.js.org/) (React components for Leaflet maps)
-   **API**:
    -   [OpenWeatherMap API](https://openweathermap.org/api) (for weather data)
    -   Browser Geolocation API (for location data)

---

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

-   [Node.js](https://nodejs.org/en/download/) (v14 or newer) & npm
-   A free API key from [OpenWeatherMap](https://openweathermap.org/)

### 1. API Key Setup

1.  Go to [OpenWeatherMap](https://openweathermap.org/) and create a free account.
2.  Navigate to the "API keys" tab in your user dashboard.
3.  Copy your default API key. (Note: It may take a few minutes for a new key to become active).

### 2. Project Installation


2.  **Create a local environment file:**
    -   Create a new file named `.env` in the root of the project.
    -   Inside `.env`, add your OpenWeatherMap API key. **The variable must start with `REACT_APP_`**.
    ```
    # .env
    REACT_APP_OPENWEATHER_API_KEY=your_api_key_goes_here
    ```

3.  **Install dependencies:**
    ```sh
    npm install
    ```

4.  **Run the application:**
    ```sh
    npm start
    ```
    The application will open and run on `http://localhost:3000`.

---

## 🎮 How to Use

1.  When you first open the application, your browser will prompt you for location access.
2.  **You must click "Allow"** for the app to detect your location and fetch the correct weather data.
3.  If location access is denied, the app will show weather for a default location (London).
4.  You can interact with the map by panning and zooming.
