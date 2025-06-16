import React from 'react'
import { useReducer } from 'react'

interface CounterAction {
  type: "UP";
  value: number,
}

// [3. 리듀서(reducer)]
function counterReducer(state: number, action: CounterAction): number {
  switch (action.type) {
    case "UP":
      return state + action.value;
    default: 
      return state;
  }
}

const Exam = () => {

  // dispatch : 상태 변화가 있어야 한다는 사실을 알리는 함수
  // 1. state -> 현재 상태 값 
  // 2. dispatch -> 상태변경 요청 
  // 3. reducer -> 이전 상태 + 액션 받아서 새로운 상태 리턴하는 순수함수

  // [1. 상태(state)]
  const [state, dispatch] = useReducer(counterReducer, 0);

  // [4. dispatch]
  // 상태를 변경하라고 리듀서에 action을 던진다. 
  const onClickPlus = () => {
    dispatch({
      type: "UP", 
      value: 1
    })
  }
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
    </div>
  )
}

export default Exam
