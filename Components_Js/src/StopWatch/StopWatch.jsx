import { useEffect, useState } from "react";

function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false); // Track if the timer is running

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(timer); // Clear the timer if not running
    }

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, [isRunning, time]); // Re-run effect if isRunning or time changes

  const start = () => {
    setIsRunning(true); // Start the timer
    console.log("start");
  };

  const stop = () => {
    setIsRunning(false); // Stop the timer
    console.log("stop");
  };

  const reset = () => {
    setTime(0); // Reset the timer
    setIsRunning(false); // Ensure timer is stopped on reset
    console.log("reset");
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

export default StopWatch;
