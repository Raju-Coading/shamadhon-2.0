// src/WeatherMap.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './WeatherMap.css';

const WeatherMap = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [position, setPosition] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // 1. Get user's location
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                setPosition([latitude, longitude]);
            },
            (err) => {
                setError(err.message);
                setLoading(false);
                // As a fallback, use a default location if geolocation fails
                setPosition([51.505, -0.09]); 
            }
        );
    }, []);

    useEffect(() => {
        if (!position) return;

        // 2. Fetch weather data once we have the location
        const fetchWeather = async () => {
            try {
                const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
                const lat = position[0];
                const lon = position[1];
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
                
                const response = await axios.get(url);
                setWeatherData(response.data);
            } catch (err) {
                setError('Could not fetch weather data.');
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [position]); // This effect runs whenever the position state changes

    if (loading) return <div className="loading-container"><h1>Loading weather data... 🌍</h1></div>;
    if (error) return <div className="error-container"><h1>Error: {error}</h1></div>;

    return (
        <div className="app-container">
            {weatherData && (
                <div className="weather-info">
                    <h2>Weather in {weatherData.name}</h2>
                    <div className="weather-details">
                        <img 
                            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
                            alt={weatherData.weather[0].description} 
                        />
                        <p className="temperature">{Math.round(weatherData.main.temp)}°C</p>
                        <p className="description">{weatherData.weather[0].main}</p>
                    </div>
                    <div className="extra-details">
                        <p>Humidity: {weatherData.main.humidity}%</p>
                        <p>Wind: {weatherData.wind.speed} m/s</p>
                    </div>
                </div>
            )}

            {position && (
                <MapContainer center={position} zoom={13} className="map-container">
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position}>
                        <Popup>
                            You are here!
                        </Popup>
                    </Marker>
                </MapContainer>
            )}
        </div>
    );
};

export default WeatherMap;
