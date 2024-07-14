import React, { useState } from "react";

function Main(_props) {
  const [message, setMessage] = useState("Hello, World!");

  return (
    <>
      <div>{message}</div> <div>hihi App</div>
    </>
  );
}

export default Main;
