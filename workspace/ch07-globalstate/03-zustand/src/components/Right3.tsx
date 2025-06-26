import useCounterStore from '@/zustand/counter';
import { useEffect } from 'react';

function Right3() {
  useEffect(()=>{
    console.log('#### Right3 렌더링.');
  });
  const { countUp, countDown, countReset } = useCounterStore();  
  return (
    <div>
      <h3>Right3</h3>
      <button onClick={ () => countUp(1) }>+1</button>
      <button onClick={ () => countReset() }>0</button>
      <button onClick={ () => countDown(1) }>-1</button>
    </div>
  );
}

export default Right3;