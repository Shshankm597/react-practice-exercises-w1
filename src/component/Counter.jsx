import "./toast.css";
import { useState } from "react";

// This is the first react exercise of the react session 1
export function Counter() {
  const [count, setCount] = useState(0);

  function countAdd() {
    setCount(count + 1);
  }

  function countSubtract() {
    setCount(count - 1);
  }

  return (
    <div className="toast-view">
      <h1>Counter</h1>
      <div style={{ marginLeft: "1.5rem" }}>
        <button onClick={() => countAdd()}> + </button> {count}{" "}
        <button onClick={() => countSubtract()}> - </button>
      </div>
      <hr />
    </div>
  );
} // Exercise 1 of React session ends here
