import Left2 from '@/components/Left2';
import { useEffect } from 'react';

interface Left1Props {
  count: number;
}


function Left1({count}: Left1Props) {
  useEffect(()=>{
    console.log('## Left1 렌더링.');
  });
  return (
    <div>
      <h1>Left1</h1>
      <Left2 count={count}/>
    </div>
  );
}

export default Left1;