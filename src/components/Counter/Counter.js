import { useState } from "react";

const Counter = () => {
  const initial = 1;
  const stock = 100;
  const [counter, setCounter] = useState(initial);

  const decrement = () => {
    if (counter > initial) {
      setCounter(counter - 1);
    }
  };
  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };
  return (
    <section className="card mx-auto">
      <div className="card-body d-flex justify-content-center align-items-center ">
        <button className="btn btn-outline-danger mx-2" onClick={decrement}>
          {" "}
          -{" "}
        </button>
        <h5>{counter}</h5>
        <button className="btn btn-outline-success mx-2" onClick={increment}>
          {" "}
          +{" "}
        </button>
      </div>
    </section>
  );
};
export default Counter;
