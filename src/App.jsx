import "./styles.css";
import { useState } from "react";
import {
  Home,
  About,
  Profile,
  TodoToast,
  PasswordEx
  // DarkMode // this Component is not being used right now, will be used with useContext. instead using custom feature here in app.jsx
} from "./component/component.js";

export default function App() {
  const [pageCall, setPageCall] = useState(<Home />);
  const [btnMode, setBtnMode] = useState("Dark Mode");

  const styleNav = {
    backgroundColor: "#161b22",
    color: "grey"
  };

  const styleBody = {
    backgroundColor: "#0d1117",
    color: "grey",
    height: "100vh"
  };

  return (
    <div style={btnMode !== "Dark Mode" ? styleBody : null}>
      {" "}
      <div className="nav" style={btnMode !== "Dark Mode" ? styleNav : null}>
        <span className="nav-title">Dark Figma Switch </span>
        <div className="nav-link">
          <span
            onClick={() => {
              setPageCall(<Home />);
            }}
          >
            {" "}
            Home{" "}
          </span>
          <span
            onClick={() => {
              setPageCall(<About />);
            }}
          >
            {" "}
            About{" "}
          </span>
          <span
            onClick={() => {
              setPageCall(<Profile />);
            }}
          >
            {" "}
            Profile{" "}
          </span>
          <span
            onClick={() => {
              setPageCall(<TodoToast />);
            }}
          >
            {" "}
            ToDo/Toast{" "}
          </span>
          <span
            onClick={() => {
              setPageCall(<PasswordEx />);
            }}
          >
            {" "}
            Password-Exercises{" "}
          </span>
        </div>
      </div>
      <button
        className="btnSwitchMode"
        onClick={() =>
          btnMode === "Dark Mode"
            ? setBtnMode("Normal Mode")
            : setBtnMode("Dark Mode")
        }
      >
        {" "}
        {btnMode}{" "}
      </button>
      {pageCall}
      {/* <Home /> */}
    </div>
  );
}
