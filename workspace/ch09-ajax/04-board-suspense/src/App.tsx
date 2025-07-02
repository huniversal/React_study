import BoardInfo from "@/pages/board/BoardInfo";
import { Suspense } from 'react';


function App() {
  return (
    <Suspense fallback={<p>Suspense 로딩중~</p>}>
      <BoardInfo />
    </Suspense>
  );  
}

export default App
