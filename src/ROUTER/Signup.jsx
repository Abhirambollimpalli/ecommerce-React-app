import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    alert("Signup Successful!");
    navigate("/login");
  };

  return (
    <div style={formContainer}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div style={fieldStyle}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required style={inputStyle} />
        </div>
        <div style={fieldStyle}>
          <label>Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={inputStyle} />
        </div>
        <div style={fieldStyle}>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} />
        </div>
        <div style={fieldStyle}>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required style={inputStyle} />
        </div>
        <button type="submit" style={buttonStyle}>Sign Up</button>
        <button type="button" onClick={() => navigate("/login")} style={{ ...buttonStyle, background: "#007bff" }}>
          Login
        </button>
      </form>
    </div>
  );
};

const formContainer = { maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" };
const fieldStyle = { marginBottom: "10px", display: "flex", flexDirection: "column" };
const inputStyle = { padding: "8px", borderRadius: "4px", border: "1px solid #ccc" };
const buttonStyle = { width: "100%", padding: "10px", marginTop: "10px", border: "none", borderRadius: "4px", background: "#28a745", color: "white", cursor: "pointer" };

export default Signup;
