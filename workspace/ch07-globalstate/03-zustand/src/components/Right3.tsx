import useCounterStore from '@/zustand/counter';
import { useEffect } from 'react';

function Right3() {
  useEffect(()=>{
    console.log('#### Right3 렌더링.');
  });
  // count를 사용하지 않더라도 counterStore의 모든 상태가 자동으로 구독되므로
  // count 변경 시 리렌더링 된다
  // const { countUp, countDown, countReset } = useCounterStore();  
  // 렌더링 최적화를 위해서 필요한 상태만 선택적 구독
  const countUp = useCounterStore(state => state.countUp);
  const countDown = useCounterStore(state => state.countDown);
  const countReset = useCounterStore(state => state.countReset);
  return (
    <div>
      <h3>Right3</h3>
      <button onClick={ () => countUp(10) }>+10</button>
      <button onClick={ () => countReset() }>0</button>
      <button onClick={ () => countDown(10) }>-10</button>
    </div>
  );
}

export default Right3;