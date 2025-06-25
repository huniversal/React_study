import { useEffect } from 'react';
interface Left3Props {
  count: number;
}

function Left3({count}: Left3Props) {
  useEffect(()=>{
    console.log('#### Left3 렌더링.');
  });
  return (
    <div>
      <h3>Left3</h3>
      <span>{count}</span>
    </div>
  );
}

export default Left3;