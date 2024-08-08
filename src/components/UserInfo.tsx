import React, { useEffect, useState } from "react";

function UserInfo({}) {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    setUserName(userName ?? "");
  }, []);

  const saveLocalStorageUserName = (name) => {
    localStorage.setItem("userName", name);
    setUserName(name);
    return;
  };

  const content =
    userName.length > 0 ? (
      <div>{userName} 님 안녕하세요 </div>
    ) : (
      <aside>
        <div>이름을 입력해 보세요</div>
        <input name="userName" />
        <button
          onClick={() =>
            saveLocalStorageUserName(
              JSON.stringify(
                (document.getElementsByName("userName")[0] as HTMLInputElement)
                  .value
              )
            )
          }
        >
          submit
        </button>
      </aside>
    );

  return <section>{content}</section>;
}

export default UserInfo;
