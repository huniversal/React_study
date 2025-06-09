import './App.css';
import { useState } from "react";

function App() {
  const [position, setPosition] = useState({x:50, y:150});
  return (
    <>
      <h1>13 상태관리 대상이 객체일 경우 주의 사항</h1>
      <div className="container" onPointerMove={e => {
        console.log(e.pageX, e.pageY);
        // 리렌더링 안 됨  
        // position.x = e.pageX;
        // position.y = e.pageY;

        // 리렌더링 됨 (새로운 객체를 만들어줌)
        const newPosition = {
          x: e.pageX,
          y: e.pageY
        }
        setPosition(newPosition);
      }}></div>
      <div className="circle" style={{pointerEvents:'none', transform: `translate(${position.x}px, ${position.y}px)`}}></div>   
    </>
  )
}

export default App