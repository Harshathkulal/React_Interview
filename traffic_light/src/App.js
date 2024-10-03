import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [activeLight, setActiveLight] = useState("red");

  useEffect(() => {
    // Define the Data object inside the useEffect
    const Data = {
      red: { time: 1500, next: "yellow" },
      yellow: { time: 1000, next: "green" },
      green: { time: 500, next: "red" },
    };

    const timerId = setTimeout(() => {
      setActiveLight(Data[activeLight].next); // Move to the next light based on the `next` property
    }, Data[activeLight].time);

    return () => clearTimeout(timerId); // Cleanup on re-render
  }, [activeLight]); // Only depend on activeLight

  return (
    <div className="App">
      App 1 solution
      <div>
        <button onClick={()=>setActiveLight("red")}>Red</button>
        <button onClick={()=>setActiveLight("yellow")}>Yellow</button>
        <button onClick={()=>setActiveLight("green")}>Green</button>
      </div>
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

export default App;
