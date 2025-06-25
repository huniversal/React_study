import Right3 from '@/components/Right3';
import { useEffect } from 'react';

interface Right2Props {
  countUp: () => void;
}

function Right2({ countUp }: Right2Props) {
  useEffect(() => {
    console.log('### Right2 렌더링.');
  }, []);

  return (
    <div>
      <h2>Right2</h2>
      <Right3 countUp={countUp} />
    </div>
  );
}

export default Right2;