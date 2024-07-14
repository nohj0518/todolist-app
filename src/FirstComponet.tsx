import React, { useState } from "react";

function MyFunctionalComponent(_props) {
  const [message, setMessage] = useState("Hello, World!");

  return <div>{message}</div>;
}

export default MyFunctionalComponent;
