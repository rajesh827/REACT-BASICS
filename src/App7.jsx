import React, { useState, useRef } from "react";

function FocusInput() {
  const [name, setName] = useState("");
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: "20px", textAlign: "center", fontFamily: "Arial" }}>
      <h1>UseRef Example</h1>

      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name..."
        style={{ padding: "10px", fontSize: "16px" }}
      />

      <button
        onClick={handleFocus}
        style={{ marginLeft: "10px", padding: "10px" }}
      >
        Focus Input
      </button>

      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        Current Value: <strong>{name}</strong>
      </p>

      <div style={{ marginTop: "50px", color: "gray", fontSize: "14px" }}>
        <p>Copyright &copy; Rajesh</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <FocusInput />
    </div>
  );
}

export default App;
