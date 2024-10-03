import { useEffect, useState } from "react";
import "./App.css";

function App3() {
  const [activeLight, setActiveLight] = useState("red");

  useEffect(() => {
    let time = 0;
    let nextLight = "";

    // Using if-else statements to determine the light timing and the next light
    if (activeLight === "red") {
      time = 15000; // 15 seconds for red light
      nextLight = "green";
    } else if (activeLight === "green") {
      time = 10000; // 10 seconds for green light
      nextLight = "yellow";
    } else if (activeLight === "yellow") {
      time = 5000; // 5 seconds for yellow light
      nextLight = "red";
    }

    const timerId = setTimeout(() => {
      setActiveLight(nextLight); // Move to the next light
    }, time);

    return () => clearTimeout(timerId); // Cleanup timer on re-render or unmount
  }, [activeLight]);

  return (
    <div className="App">
      App 3 Soultion
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: "red",
          padding: "5px",
          opacity: `${activeLight === "red" ? "1" : "0.2"}`,
        }}
      >
        red
      </div>
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: "yellow",
          padding: "5px",
          opacity: `${activeLight === "yellow" ? "1" : "0.2"}`,
        }}
      >
        yellow
      </div>
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: "green",
          padding: "5px",
          opacity: `${activeLight === "green" ? "1" : "0.2"}`,
        }}
      >
        green
      </div>
    </div>
  );
}

export default App3;
