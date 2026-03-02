import React, { useState } from "react";

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div
      style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}
    >
      <h1>{isLoggedIn ? "Welcome back!" : "Please log in!"}</h1>

      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
      <div style={{ marginTop: "50px", color: "gray", fontSize: "14px" }}>
        <p>Copyright &copy; Rajesh</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <LoginStatus />
    </div>
  );
}

export default App;
