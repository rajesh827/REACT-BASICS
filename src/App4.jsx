import React, { useState } from "react";

function App() {
  // 1. State object with username, email, age
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Welcome " + formData.username + "!");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Registration Form</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "300px",
        }}
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />

        <button type="submit">Register</button>
      </form>

      <hr />

      <h3>Real-time Data:</h3>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      <div style={{ marginTop: "50px", color: "gray", fontSize: "14px" }}>
        <p>Copyright &copy; Rajesh</p>
      </div>
    </div>
  );
}

export default App;
