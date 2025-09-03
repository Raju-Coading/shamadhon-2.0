import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } else {
      setMessage(data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-80">
        <h2 className="text-xl font-bold mb-4 text-center">🔑 Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded mb-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={login}
          className="w-full py-2 bg-blue-500 text-white rounded mb-2"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/register")}
          className="w-full py-2 bg-gray-400 text-white rounded"
        >
          Go to Register
        </button>
        <p className="text-red-500 mt-2">{message}</p>
      </div>
    </div>
  );
}

export default Login;
