import React from "react";

const Card = ({ children }) => {
  const cardStyle = {
    border: "2px solid #333",
    padding: "20px",
    margin: "15px",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    maxWidth: "300px",
  };

  return <div style={cardStyle}>{children}</div>;
};

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Children Prop Example</h1>
      <Card>
        <p>
          This is a simple text paragraph passed as a child to the Card
          component.
        </p>
      </Card>

      <Card>
        <button
          onClick={() => alert("Button Clicked!")}
          style={{ padding: "10px" }}
        >
          Click Me!
        </button>
      </Card>

      <Card>
        <h3 style={{ color: "blue" }}>Shopping List</h3>
        <ul>
          <li>Apples</li>
          <li>Milk</li>
          <li>Bread</li>
        </ul>
      </Card>
    </div>
  );
}

export default App;
