import { useState } from "react";
import "./App.css";

function App2() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let timer;

  const start = () => {
    if (!isRunning) {
      // Only start a new timer if it's not already running
      setIsRunning(true);

      timer = setInterval(() => {
        console.log("sss");
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stop = () => {
    if (isRunning) {
      clearInterval(timer); // Clear the timer when stopping
      setIsRunning(false);
    }
  };

  const reset = () => {
    clearInterval(timer); // Clear the timer on reset
    setTime(0); // Reset the timer
    setIsRunning(false); // Ensure timer is stopped on reset
  };

  return (
    <>
      <div>{time}</div>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App2;
