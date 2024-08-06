import React, { useState } from "react";
import ToDoList from "./components/ToDoList.tsx";
import "./global.css";

function Main(_props) {
  const [message, setMessage] = useState("Hello, World!");

  return (
    <>
      <head>
        <link href="/dist/output.css" rel="stylesheet" />
      </head>
      <link rel="stylesheet" href="https://unpkg.com/mvp.css"></link>

      <body>
        <header>
          <h1 className="text-3xl font-bold underline red">Hello world!</h1>
          <div> 메인 헤더 welcome message : {message}</div>
        </header>
        <main>
          <ToDoList></ToDoList>
        </main>
        <footer>footer : 푸터를 만든다면...</footer>
      </body>
    </>
  );
}

export default Main;
