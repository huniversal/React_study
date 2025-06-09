import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const countPlus = () => {
    // 리액트가 콜백 함수의 리턴값을 저장해 두었다가 
    // 다음에 호출도;는 콜백 함수의 인자로 전달함
    setCount(prev => prev + 1);
  }

  return (
    <>
      <h2>12 이벤트 핸들러에서 state 값을 여러번 변경했을 때 문제점</h2>
      <p>{count}</p>
      <button onClick={countPlus}>+1</button>
    </>
  );
}

export default App;