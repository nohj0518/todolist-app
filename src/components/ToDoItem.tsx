import React, { useState } from "react";

function ToDoItem({ todos, onDelete, onUpdate }) {
  const [message, setMessage] = useState("Hello, World!");

  const content =
    todos.length > 0 ? (
      todos.map((todo) => (
        <aside key={todo.id}>
          <h3> 할일 제목 : {todo.title}</h3>
          <p> 할일 메모 : {todo.memo}</p>
          <p className={todo.isComplete ? "red" : "green"}>
            {" "}
            할일 완료 상태 : {todo.isComplete ? "완료" : "미완료"}
          </p>
          <a onClick={() => onDelete(todo.id)}>
            <b>Delete</b>
          </a>{" "}
          <a onClick={() => onUpdate(todo.id)}>
            <i>{todo.isComplete ? "🔙" : "✔️"}</i>
          </a>
        </aside>
      ))
    ) : (
      <aside>
        <div>Empty Todo</div>
      </aside>
    );

  return <section>{content}</section>;
}

export default ToDoItem;
