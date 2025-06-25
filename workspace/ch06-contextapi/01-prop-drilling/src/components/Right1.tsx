import Right2 from '@/components/Right2';
import { useEffect } from 'react';

interface Right1Props {
  countUp: () => void;
}

function Right1({countUp}: Right1Props) {
  useEffect(()=>{
    console.log('## Right1 렌더링.');
  });
  return (
    <div>
      <h1>Right1</h1>
      <Right2 countUp={countUp}/>
    </div>
  );
}

export default Right1;