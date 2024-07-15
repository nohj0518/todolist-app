import React, { useState } from "react";
import ToDoItem from "./ToDoItem.tsx";

function ToDoList(_props) {
  const [todo, setText] = useState({});

  const [todos, setTodos] = useState([
    { id: 1, title: "Sample Todo 1", memo: "This is a sample memo 1" },
    { id: 2, title: "Sample Todo 2", memo: "This is a sample memo 2" },
  ]);

  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const createTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div>
        <header>
          <h2>오늘의 할일을 생성해보세요 !</h2>
          <p>{formattedDate}</p>
          <button onClick={() => this.onCreate(todo.id + 1)}>Create</button>
        </header>
        <ToDoItem todos={todos} onDelete={deleteTodo} />
      </div>
    </>
  );
}

export default ToDoList;
