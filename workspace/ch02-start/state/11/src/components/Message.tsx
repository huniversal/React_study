import { useState } from "react";

function Message() {
  const [msg, setMsg] = useState('');
  const [count, setCount] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputMsg = e.target.value;
    setMsg(inputMsg);
    setCount(prev => prev + 1);

    /**
       * 제어컴포넌트
       * - input 요소에 value, onChange 추가
       * - 리액트의 state와 input요소의 value 동기화
       * 
       * 비제어컴포넌트
       * - input 요소에 value, onChange 추가하지 않음
       * - 리액트의 state와 input요소의 value 동기화되지 않을 수 있음음
     */
  }
  return (
    <div>
      <input type="text" value={ msg } onChange={ handleChange } />
      <br />
      <span>입력 메세지: { msg } </span>
      <br />
      <span>입력 횟수: { count }</span>
    </div>
  )

}

export default Message;