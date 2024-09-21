// src/components/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="home-container">
      <h2>Home Page</h2>
      <button onClick={handleLogout} className="home-button">
        Logout
      </button>
    </div>
  );
};

export default Home;
