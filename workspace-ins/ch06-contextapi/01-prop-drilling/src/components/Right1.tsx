import Right2 from '@/components/Right2';
import { useEffect } from 'react';

function Right1({ countUp }: { countUp: (step: number) => void }) {
  useEffect(()=>{
    console.log('## Right1 렌더링.');
  });
  return (
    <div>
      <h1>Right1</h1>
      <Right2 countUp={ countUp } />
    </div>
  );
}

export default Right1;