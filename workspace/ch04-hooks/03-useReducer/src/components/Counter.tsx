import Button from "@components/Button";
import counterReducer from '../CounterReducer';
import { useReducer, useState } from "react";

interface CounterProps {
  children: string;
}

interface CounterAction {
  type: 'UP' | 'DOWN' | 'RESET';
  value: number,
}

// TODO 리듀서 작성
/* 현재 상태와 action 객체를 받아서 새로운 상태를 반환하는 순수 함수
로직을 컴포넌트 내부에서 직접 구현하지 않고 외부에서 구현
state: 이전 상태(useReducer가 내부적으로 관리, 이전의 리턴값이 다음의 state로 전달)
action: 동작을 정의한 객체(자유롭게 작성. 일반적으로 type 속성에 동작을, value 속성에 값을 지정)
리턴값: 새로운 상태 */


// Counter 컴포넌트
function Counter({ children='0' }: CounterProps){
  console.log('\tCounter 호출됨');

  const initCount = Number(children);

  const [ count, countDispatch ] = useReducer(counterReducer, initCount);
  const [ step, setStep ] = useState(1);

  // 증감값 변경 처리
  function handleStepChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newStep = Number(e.target.value);
    setStep(newStep);
  }

  return (
    <div id="counter">
      <label htmlFor="step">증감치</label>
      {/* 제어 컴포넌트 value, onChange 사용 */}
      <input  
        id="step" 
        type="number" 
        value={ step } 
        onChange={ handleStepChange } 
      />
      <Button color="red" onClick={ () => countDispatch({type:'DOWN', value: step }) }>-_-</Button>
      <Button type="reset" onClick={ () => countDispatch({type:'RESET', value: step }) }>0_0</Button>
      <Button type="submit" color="blue" onClick={ () => countDispatch({type:'UP', value: step }) }>+_+</Button>
      <span>{ count }</span>
    </div>
  );
}
export default Counter;