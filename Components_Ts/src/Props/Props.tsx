import React from "react";

interface CarProps {
  car: string[];
}

interface BikeProps {
  bike: string[];
  submit: () => void;
}

const Props: React.FC = () => {
  const car = ["i10", "BMW", "Volvo", "nano"];
  const bike = ["honda", "splendor", "activa"];

  const submit = () => {
    console.log("Submit button clicked");
  };

  return (
    <div>
      <Cars car={car} />
      <Bikes bike={bike} submit={submit} />
    </div>
  );
};

export default Props;

const Cars: React.FC<CarProps> = (props) => {
  return (
    <div>
      {props.car.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

const Bikes: React.FC<BikeProps> = ({ bike, submit }) => {
  return (
    <div>
      {bike.map((item, index) => (
        <div key={index}>{item}</div>
      ))}

      <button onClick={submit}>Submit</button>
    </div>
  );
};
