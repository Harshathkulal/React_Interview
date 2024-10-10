import { useState } from "react";

const BookingSystem = () => {
  const vipSeatCount = 25;
  const vipSeats = [...Array(vipSeatCount)].map((_, index) => index + 1);

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    setSelectedSeats((prevState) => {
      // If the seat is already selected, return the previous state (no duplicates)
      if (prevState.includes(seatNumber)) {
        return prevState;
      }
      // Otherwise, add the seat to the selectedSeats array
      return [...prevState, seatNumber];
    });
  };

  const displaySeatSelected = () => {
    alert(selectedSeats);
  };

  return (
    <div style={{ padding: "2px" }}>
      {vipSeats.map((seatNumber) => (
        <button
          key={seatNumber}
          onClick={() => handleSeatClick(seatNumber)}
          style={{
            margin: "5px",
            backgroundColor: selectedSeats.includes(seatNumber)
              ? "green"
              : "lightgray",
          }}
        >
          {seatNumber}
        </button>
      ))}
      <p></p>
      <button onClick={displaySeatSelected}>Submit</button>
    </div>
  );
};

export default BookingSystem;
