import React, { useState } from "react";

function ToDoItem(_props) {
  const [message, setMessage] = useState("Hello, World!");

  return (
    <>
      <div>
        <h2> 할일 제목 : 운동가기 </h2>
        <p>
          {" "}
          할일 메모 : 오늘의 운동 루틴 유산소 30분, 팔굽혀펴기 50개, 스쿼트
          100개{" "}
        </p>
        <button> Delete </button>
      </div>
    </>
  );
}

export default ToDoItem;
