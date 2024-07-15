import React, { useState } from "react";

function ToDoItem(props) {
  const [message, setMessage] = useState("Hello, World!");

  const content =
    props.todos.length > 0 ? (
      props.todos.map((todo) => (
        <aside key={todo.id}>
          <h3> 할일 제목 : {todo.title}</h3>
          <p> 할일 메모 : {todo.memo}</p>
          <a onClick={() => props.onDelete(todo.id)}>
            <b>Delete</b>
          </a>{" "}
          <a onClick={() => props.onDelete(todo.id)}>
            <i>Update</i>
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
