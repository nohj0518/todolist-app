import React, { useState } from "react";
import ToDoItem from "./ToDoItem.tsx";

function ToDoList(_props) {
  const [title, setTitle] = useState("");
  const [memo, setMemo] = useState("");

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

  const createTodo = (title, memo) => {
    const newId = todos.length ? todos[todos.length - 1].id + 1 : 1;
    setTodos([...todos, { id: newId, title, memo }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(title, memo);
    setTitle("");
    setMemo("");
  };

  const updateTodo = (id) => {};

  const showTodoForm = () => {};

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <header>
            <p>{formattedDate}</p>
            <h2>오늘의 할일을 생성해보세요 !</h2>
          </header>
          <label htmlFor="title">할일 제목</label>
          <input
            name="title"
            id="title"
            value={title}
            required
            placeholder="할일 제목을 입력하세요"
            size={60}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <label htmlFor="memo">할일 메모</label>
          <input
            name="memo"
            id="memo"
            value={memo}
            required
            placeholder="할일 메모를 입력하세요"
            size={60}
            onChange={(e) => setMemo(e.target.value)}
          ></input>
          <button type="submit">Create</button>
        </form>
        <ToDoItem todos={todos} onDelete={deleteTodo} />
      </div>
    </>
  );
}

export default ToDoList;
