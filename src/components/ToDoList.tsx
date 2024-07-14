import React, { useState } from "react";
import ToDoItem from "./ToDoItem.tsx";

function ToDoList(_props) {
  const [message, setMessage] = useState("Hello, World!");

  return (
    <>
      <div>
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </div>
    </>
  );
}

export default ToDoList;
