import React, { useState } from "react";

const Child = ({ name }) => {
  return (
    <div style={{ border: "2px solid red", padding: "10px", margin: "10px" }}>
      <h3>Child Component</h3>
      <p>
        Data received from Grandparent: <strong>{name}</strong>
      </p>
    </div>
  );
};

const Parent = ({ name }) => {
  return (
    <div style={{ border: "2px solid blue", padding: "10px", margin: "10px" }}>
      <h3>Parent Component</h3>
      <Child name={name} />
    </div>
  );
};

const Grandparent = () => {
  const [userName] = useState("John Doe");

  return (
    <div style={{ border: "2px solid black", padding: "20px", margin: "20px" }}>
      <h2>Grandparent Component</h2>
      <p>State is defined here: {userName}</p>
      <Parent name={userName} />
    </div>
  );
};

function App() {
  return (
    <div style={{ fontFamily: "Arial", textAlign: "center" }}>
      <Grandparent />
      <div style={{ marginTop: "50px", color: "gray", fontSize: "14px" }}>
        <p>Copyright &copy; Rajesh</p>
      </div>
    </div>
  );
}

export default App;
