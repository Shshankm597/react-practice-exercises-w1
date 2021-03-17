import "./toast.css";
import { useState } from "react";

export function Toast() {
  const [toastType, setToastType] = useState();
  const [hideStyle, setHideStyle] = useState("visible");

  function successToast() {
    // setHideStyle("visible");

    return (
      <div
        className="toastBox"
        style={{
          backgroundColor: "rgba(76, 175, 80, 0.9)",
          visibility: `${hideStyle}`
        }}
      >
        <h2> Success Alert </h2>
        <p> You have got a success Toast. </p>
      </div>
    );
  }

  function warningToast() {
    // setHideStyle("visible");

    return (
      <div
        className="toastBox"
        style={{
          backgroundColor: "rgba(255, 165, 0, 0.9)",
          visibility: `${hideStyle}`
        }}
      >
        <h2> Warning Alert </h2>
        <p> You have got a warning Toast. </p>
      </div>
    );
  }

  function errorToast() {
    // setHideStyle("visible");

    return (
      <div
        className="toastBox"
        style={{
          backgroundColor: "rgba(255, 0, 0, 0.9)",
          visibility: `${hideStyle}`
        }}
      >
        <h2> Error Alert </h2>
        <p> You have got an error Toast. </p>
      </div>
    );
  }

  function hideToast() {
    setHideStyle("hidden");
    successToast();
    warningToast();
    errorToast();
    setHideStyle("visible");
  }

  return (
    <div className="toast-view">
      <button
        style={{ margin: "1rem" }}
        onClick={() => {
          setToastType(successToast);
        }}
      >
        Success Toast
      </button>
      <button
        style={{ margin: "1rem" }}
        onClick={() => {
          setToastType(warningToast);
        }}
      >
        Warning Toast
      </button>
      <button
        style={{ margin: "1rem" }}
        onClick={() => {
          setToastType(errorToast);
        }}
      >
        Error Toast
      </button>
      {toastType}
      <button
        style={{ margin: "1rem" }}
        onClick={() => {
          setToastType(hideToast);
        }}
      >
        Hide Toast
      </button>

      <hr />
    </div>
  );
}
