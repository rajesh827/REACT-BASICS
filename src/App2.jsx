import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}
    >
      <h1>Counter App</h1>

      <h2 style={{ fontSize: "3rem", margin: "20px" }}>{count}</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button
          onClick={() => setCount(count + 1)}
          style={{ padding: "10px 20px" }}
        >
          Increment (+)
        </button>

        <button
          onClick={() => setCount(count - 1)}
          style={{ padding: "10px 20px" }}
        >
          Decrement (-)
        </button>

        <button
          onClick={() => setCount(0)}
          style={{ padding: "10px 20px", backgroundColor: "#ffcccc" }}
        >
          Reset
        </button>
      </div>
      <div style={{ marginTop: "50px", color: "gray", fontSize: "14px" }}>
        <p>Copyright &copy; Rajesh</p>
      </div>
    </div>
  );
}

export default App;
