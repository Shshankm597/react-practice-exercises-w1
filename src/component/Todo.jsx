import "./todo.css";
import { useState } from "react";

export function Todo() {
  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [todoListStyle, setTodoListStyle] = useState("none");

  function inputFromUser(event) {
    setUserInput(event.target.value);
  }

  function storingUserInput() {
    setTodoList([...todoList, userInput]);
    setUserInput(""); //this will prompt error for changing uncontrolled element to controlled input as react will then manage it's state

    // this.text.value = ""; //handling uncontrolled input element - need to unserstand this
  }

  function isTodoListStriked(userInput) {
    setTodoListStyle(todoListStyle === "none" ? "line-through" : "none");
  }

  return (
    <div className="todo-view">
      <h1 className="todo-header"> Todo App </h1>
      <input
        onChange={inputFromUser}
        className="todo-input"
        type="text"
        placeholder="Add your ToDos here"
        // ref={(el) => (this.text = el)} //this will prompt error for changing uncontrolled element to controlled input as react will then manage it's state

        value={userInput} //handling uncontrolled input element - need to unserstand this
      />
      <button disabled={userInput === ""} onClick={storingUserInput}>
        {" "}
        Add{" "}
      </button>
      <ol>
        {todoList.map((userInput) => (
          <li
            key={userInput}
            style={{ textDecoration: `${todoListStyle}` }}
            onClick={() => isTodoListStriked(userInput)}
          >
            {userInput}
          </li>
        ))}
      </ol>
    </div>
  );
}
