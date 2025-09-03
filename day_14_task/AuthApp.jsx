import React, { useState } from "react";

function AuthApp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");

  const API_URL = "http://localhost:5000/api";

  // Register
  const register = async () => {
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    setMessage(data.message);
  };

  // Login
  const login = async () => {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (data.token) {
      setToken(data.token);
      setMessage("Login successful ✅");
    } else {
      setMessage(data.message);
    }
  };

  // Get profile
  const getProfile = async () => {
    const res = await fetch(`${API_URL}/profile`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setMessage(JSON.stringify(data));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">🔑 Auth App</h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        <div className="flex justify-between mb-4">
          <button
            onClick={register}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Register
          </button>
          <button
            onClick={login}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Login
          </button>
        </div>

        {token && (
          <button
            onClick={getProfile}
            className="w-full py-2 bg-purple-500 text-white rounded mb-4"
          >
            Get Profile
          </button>
        )}

        <p className="text-sm text-gray-700 break-words">{message}</p>
      </div>
    </div>
  );
}

export default AuthApp;
