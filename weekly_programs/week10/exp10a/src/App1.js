import React, { useState, useEffect } from "react";

function App1() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Updating the Screen</h2>
      <h3>Current Time: {time}</h3>
    </div>
  );
}
export default App1;