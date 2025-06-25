import { useEffect } from 'react';

interface Right3Props {
  countUp: () => void;
}

function Right3({ countUp }: Right3Props) {
  useEffect(() => {
    console.log('#### Right3 렌더링.');
  }, []);

  return (
    <div>
      <h3>Right3</h3>
      <button onClick={countUp}>+1</button>
    </div>
  );
}

export default Right3;