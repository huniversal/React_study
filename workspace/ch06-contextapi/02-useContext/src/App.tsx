import { useEffect, useState } from 'react';
import Left1 from '@/components/Left1';
import Right1 from '@/components/Right1';
import { CounterContext } from "@contexts/CounterContext"
import './App.css';

function App() {

  useEffect(()=>{
    // TODO count가 수정되더라도 렌더링이 발생하지 않도록 counterContext로 상태 관리 로직 이동
    console.log('# App 렌더링.');
  });

  const [count, setCount] = useState<number>(0);

  const countUp = () => {
    setCount(prev => prev + 1);
  }

  const value = { count, countUp };

  return (
    <>
      <h1>02 Context API - useContext 훅</h1>
      <div id="container">
        <h1>App</h1>
        <div id="grid">
          {/* 3. context 제공하기 */}
          <CounterContext value={ value }>          
            <Left1 />
            <Right1 />
          </CounterContext>
        </div>
      </div>
    </>
  );
}

export default App;