// src/components/Login.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setName(location.state.name || "");
      setPassword(location.state.password || "");
    }
  }, [location.state]);

  const handleLogin = () => {
    axios
      .post("http://localhost:8000/api/token/", { name, password })
      .then((response) => {
        localStorage.setItem("token", response.data.access);
        navigate("/home");
      })
      .catch((error) => {
        console.error("There was an error logging in!", error);
      });
  };

  const handleRegister = () => {
    navigate("/");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="login-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />
      <div className="login-buttons">
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
        <button onClick={handleRegister} className="register-button">
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
