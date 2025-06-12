import React, { useState } from 'react'

const AppBank = () => {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h2>useReducer 은행에 오신것을 환영합니다.</h2>
      <p>잔고: ?원</p>
      <input 
        type="text"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"  
      />
      <button>예금</button>
      <button>출금</button>
    </div>
  );
}

export default AppBank
