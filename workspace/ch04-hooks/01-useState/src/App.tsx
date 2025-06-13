// TODO 1. 메세지를 입력하면 입력 메세지에 반영되도록 수정
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e -> 이벤트 객체
    // React.ChangeEvent<HTMLInputElement> -> 이벤트가 어떤 타입인지 설명해줌
    setMessage(e.target.value);
    // e.target.value -> input 안에 입력된 값을 가져오는 것
  }
  return (
    <>
      <h1>01 useState - 상태 관리</h1>
      <div>
        <input type="text" value={message} onChange={handleChange} />
        <br />
        <span>입력 메세지: {message}</span>
      </div>
    </>
  );
}

export default App
