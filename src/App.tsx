import React, { useState } from "react";

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
          <h1> 제목 같은거</h1>
          <button> button </button>
        </main>
        <footer></footer>
      </body>
    </>
  );
}

export default Main;
