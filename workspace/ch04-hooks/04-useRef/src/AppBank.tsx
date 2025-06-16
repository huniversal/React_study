import React, { useState, useReducer } from 'react'

// 상태 타입
type State = number;

// 액션 타입
type Action = 
  | { type: 'deposit'; payload: number }
  | { type: 'withdraw'; payload: number };

// 리듀서
const reducer = (state: State, action: Action): State => {
  console.log('reducer가 일을 합니다!', state, action);
  switch (action.type) {
    case 'deposit':
      return state + action.payload;
    case 'withdraw':
      return state - action.payload;
    default:
      return state;
  }
}

const AppBank = () => {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>useReducer 은행에 오신것을 환영합니다.</h2>
      <p>잔고: {money}원</p>
      <input 
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"  
      />
      <button onClick={() => {
        dispatch({type:"deposit", payload: number});
      }}>예금</button>
      <button onClick={() => {
        dispatch({type:"withdraw", payload: number})
      }}>출금</button>
    </div>
  );
}

export default AppBank;