import React, { useState, useEffect } from "react";

function WindowResizeListener() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Window Resize Listener</h2>
      <p style={{ fontSize: "24px" }}>
        Current Width: <strong>{width}px</strong>
      </p>
    </div>
  );
}

function App() {
  return (
    <div>
      <WindowResizeListener />
    </div>
  );
}

export default App;
