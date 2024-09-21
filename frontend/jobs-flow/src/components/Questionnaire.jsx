// src/components/Questionnaire.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Questionnaire.css";

const Questionnaire = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    contact: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const questions = [
    { label: "What is your name?", key: "name" },
    { label: "What is your age?", key: "age" },
    { label: "What is your address?", key: "address" },
    { label: "What is your contact?", key: "contact" },
    { label: "What is your password?", key: "password" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [questions[step].key]: e.target.value });
    setError("");
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      axios
        .post("http://localhost:8000/api/register/", formData)
        .then((response) => {
          toast.success("User created successfully", {
            onClose: () => navigate("/login", { state: formData }),
          });
        })
        .catch((error) => {
          if (error.response && error.response.status === 400) {
            setError("User already exists or invalid data");
          } else {
            setError("An unexpected error occurred");
          }
        });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleNext();
    }
  };

  return (
    <div className="questionnaire-container">
      <div className="questionnaire-box">
        <h2 className="questionnaire-question">{questions[step].label}</h2>
        <input
          type={questions[step].key === "password" ? "password" : "text"}
          value={formData[questions[step].key]}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          className="questionnaire-input"
          autoFocus
        />
        {error && <p className="error-message">{error}</p>}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Questionnaire;
