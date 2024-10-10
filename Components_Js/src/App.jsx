import BookingSystem from "./Booking_System/BookingSystem";
import { Pagination } from "./Pagination/Pagination";
import StopWatch from "./StopWatch/StopWatch";
// import Todo from "./Todo/Todo";
import Todo2 from "./Todo/Todo2";
import Traffic from "./Traffic_Light/Traffic_Light";

const App = () => {
  return (
    <div className="App">
      {/* <Todo /> */}
      <Todo2 />
      <p>
        ...............................................................................................................
      </p>
      <Traffic />
      <p>
        ...............................................................................................................
      </p>
      <StopWatch />
      <p>
        ...............................................................................................................
      </p>
      <BookingSystem />

      <p>
        ...............................................................................................................
      </p>
      <Pagination />
    </div>
  );
};

export default App;
