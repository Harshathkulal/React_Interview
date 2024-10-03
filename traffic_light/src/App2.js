import { useEffect, useState } from "react";
import "./App.css";

function App2() {
  const [isActive, setIsActive] = useState("red");

  useEffect(() => {
    const Data = {
      red: { time: 15000 },
      yellow: { time: 5000 },
      green: { time: 10000 },
    };
    const TimerID = setTimeout(() => {
      switch (isActive) {
        case "red":
          setIsActive("green");
          break;
        case "green":
          setIsActive("yellow");
          break;
        case "yellow":
          setIsActive("red");
          break;
        default:
          setIsActive("red");
          break;
      }
    }, Data[isActive].time);

    return () => clearTimeout(TimerID);
  }, [isActive]);

  return (
    <div className="App">
      App 2 Solution
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: "red",
          padding: "5px",
          opacity: `${isActive === "red" ? "1" : "0.2"}`,
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
          opacity: `${isActive === "yellow" ? "1" : "0.2"}`,
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
          opacity: `${isActive === "green" ? "1" : "0.2"}`,
        }}
      >
        green
      </div>
    </div>
  );
}

export default App2;
