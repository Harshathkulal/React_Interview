const Props = () => {
  const car = ["i10", "BMW", "Volvo", "nano"];
  const bike = ["honda", "splendor", "activa"];

  const submit = () => {
    console.log("Submit button clicked");
  };

  return (
    <div>
      <Cars car={car} submit={submit} />
      <Bikes bike={bike} submit={submit} />
    </div>
  );
};

export default Props;

const Cars = (props) => {
  return (
    <div>
      {props.car.map((item, index) => (
        <div key={index}>{item}</div>
      ))}

      <button onClick={props.submit}>Submit</button>
    </div>
  );
};

const Bikes = ({ bike, submit }) => {
  return (
    <div>
      {bike.map((item, index) => (
        <div key={index}>{item}</div>
      ))}

      <button onClick={submit}>Submit</button>
    </div>
  );
};
