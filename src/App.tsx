import React, { useState } from "react";
import ToDoList from "./components/ToDoList.tsx";

function Main(_props) {
  const [message, setMessage] = useState("Hello, World!");

  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/mvp.css"></link>
      <body>
        <header>
          <div>welcome message : {message}</div>
        </header>
        <main>
          <ToDoList></ToDoList>
        </main>
        <footer>footer</footer>
      </body>
    </>
  );
}

export default Main;
