import "./toast.css";
import { useState } from "react";

export function Signup() {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [btnPwd, setBtnPwd] = useState("Show Password");
  const [alphaMsg, setAlphaMsg] = useState("");

  function alphaCheck(event) {
    let i,
      charTemp = 0,
      numTemp = 0,
      arrText;

    setPassword(event.target.value);

    arrText = [...event.target.value];

    for (i = 0; i < arrText.length; i++) {
      if (isNaN(arrText[i])) {
        charTemp = charTemp + 1;
      } else {
        numTemp = numTemp + 1;
      }
    }
    charTemp !== 0 && numTemp !== 0
      ? setAlphaMsg(null)
      : setAlphaMsg("Please enter an Alphanumeric Password");
  }

  return (
    <div className="toast-view">
      <h1>Enter Password</h1>
      <input
        style={{ margin: "0.5rem 0" }}
        value={password}
        type={btnPwd !== "Show Password" ? "text" : "password"}
        placeholder="Enter password here"
        onChange={alphaCheck}
      />
      <br />
      <input
        style={{ margin: "0.5rem 0" }}
        value={rePassword}
        type={btnPwd !== "Show Password" ? "text" : "password"}
        placeholder="Re-enter password here"
        onChange={(event) => {
          setRePassword(event.target.value);
        }}
      />
      <br />
      <button
        style={{ margin: "0.2rem" }}
        disabled={password !== "" && rePassword !== password ? true : false}
      >
        {" "}
        Submit{" "}
      </button>
      <button
        style={{ margin: "0.2rem" }}
        onClick={() =>
          btnPwd !== "Show Password"
            ? setBtnPwd("Show Password")
            : setBtnPwd("Hide Password")
        }
      >
        {" "}
        {btnPwd}{" "}
      </button>
      <br />
      {password !== "" && rePassword !== password
        ? "Password doesn't match!!"
        : null}
      <br />
      {alphaMsg}
    </div>
  );
}
