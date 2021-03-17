import "./toast.css";
import { useState } from "react";

// This is the 2nd react exercise of the react session 1
export function CharCounter() {
  const [count, setCount] = useState(0);

  function countStyle() {
    if (count <= 100) {
      return {
        color: "green",
        textAlign: "center"
      };
    } else if (count > 100 && count < 150) {
      return {
        color: "orange",
        textAlign: "center"
      };
    } else {
      return {
        color: "red",
        textAlign: "center"
      };
    }
  }

  return (
    <div className="toast-view">
      <textarea
        maxLength="200"
        style={{ margin: "1em", height: "50px", width: "300px" }}
        placeholder="Type here...."
        onChange={(event) => setCount(event.target.value.length)}
      ></textarea>
      <div style={countStyle()}>
        <span> {count} </span>
        <span>/ 200</span>
        <br />
        {count === 200 ? "You have exceeded the input threshold !" : null}
      </div>

      <hr />
    </div>
  );
}
// end of react exercise 2
