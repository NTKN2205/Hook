import React, { useReducer } from "react";

const initialState = 0;
const reducer = (Count, action) => {
  switch (action) {
    case "Increment":
      return Count + 1;
    case "Decrement":
      return Count - 1;
    case "reset":
      return 0;
    default:
      throw new Error("Unsupported action type");
  }
};

function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch("Increment");
  };

  const handleDecrement = () => {
    dispatch("Decrement");
  };

  const handleReset = () => {
    dispatch("reset");
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Tăng</button>
      <button onClick={handleDecrement}>Giảm</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
