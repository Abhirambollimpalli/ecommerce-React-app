import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
      alert("Login Successful!");
      navigate("/");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div style={formContainer}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={fieldStyle}>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} />
        </div>
        <div style={fieldStyle}>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required style={inputStyle} />
        </div>
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
  );
};

const formContainer = { maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" };
const fieldStyle = { marginBottom: "10px", display: "flex", flexDirection: "column" };
const inputStyle = { padding: "8px", borderRadius: "4px", border: "1px solid #ccc" };
const buttonStyle = { width: "100%", padding: "10px", marginTop: "10px", border: "none", borderRadius: "4px", background: "#007bff", color: "white", cursor: "pointer" };

export default Login;
