// // not being used right now, apply useContext then use it

// import "./darkmode.css";
// import { useState } from "react";

// export function DarkMode() {
//   const [btnMode, setBtnMode] = useState("Dark Mode");

//   function changeNavColor() {
//     const styleNav = {
//       backgroundColor: "#161b22",
//       color: "grey"
//     };
//     return btnMode !== "Dark Mode" ? styleNav : null;
//   }

//   function changeBodyColor() {
//     const styleBody = {
//       backgroundColor: "#0d1117",
//       color: "grey",
//       height: "100vh"
//     };
//     return btnMode !== "Dark Mode" ? styleBody : null;
//   }

//   return (
//     <div>
//       <button
//         className="btnSwitchMode"
//         onClick={() =>
//           btnMode === "Dark Mode"
//             ? setBtnMode("Normal Mode")
//             : setBtnMode("Dark Mode")
//         }
//       >
//         {" "}
//         {btnMode}{" "}
//       </button>
//     </div>
//   );
// }
