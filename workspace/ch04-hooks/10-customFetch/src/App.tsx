import useFetch from '@hooks/useFetch';
import type { TodoListRes } from "#types/todo";
// import useAxios, { type TodoListRes } from "@hooks/useAxios";

function App() {

  const { isLoading, error, data } = useFetch<TodoListRes>({ url: '/todolist?delay=1000'});

  console.log("APP 렌더링", isLoading, error, data)

  return (
    <>
      <h1>10 customHook - useFatch, useAxios 커스텀 훅 사용</h1>
      <h2>할일 목록</h2>

      {/* 로딩중일 때 로딩중 메시지 표시 */}
      { isLoading && 
        <p>로딩중...</p>
      }

      {/* 에러가 있을 경우 빨간색으로 에러 메시지 표시 */}
      { error && <p style={{ color: 'red' }}>{ error.message }</p> }

      {/* Todo 목록을 리스트로 렌더링 */}
      <ul>
        { (data)?.items.map((item) => (
          <li key={item._id}>{item.title}</li>
        )) }
      </ul>
    </>
  );
}

export default App

// POST 로직 추가
//=====================================
// import useFetch from '@hooks/useFetch';
// // import useAxios from "@hooks/useAxios";
// import { useState } from 'react';

// function App() {
//   const { isLoading, error, data, requestPost } = useFetch({ url: '/todolist?delay=1000'});
//   const [newTodo, setNewTodo] = useState('');

//   console.log("APP 렌더링", isLoading, error, data)

//   // 새로운 Todo 추가 함수
//   const handleAddTodo = async () => {
//     if (newTodo.trim()) {
//       console.log('추가할 Todo:', { title: newTodo, content: newTodo });
//       await requestPost(
//         { url: '/todolist' }, 
//         { 
//           title: newTodo.trim(),
//           content: newTodo.trim() // title과 동일한 내용으로 설정
//         }
//       );
//       setNewTodo(''); // 입력 필드 초기화
//     }
//   };

//   return (
//     <>
//       <h1>10 customHook - useFatch, useAxios 커스텀 훅 사용</h1>
//       <h2>할일 목록</h2>

//       <div style={{ marginBottom: '20px' }}>
//         <input 
//           type="text" 
//           value={newTodo}
//           onChange={(e) => setNewTodo(e.target.value)}
//           placeholder="새로운 할일을 입력하세요 (제목과 내용으로 사용됩니다)"
//           style={{ padding: '8px', marginRight: '10px', width: '400px' }}
//         />
//         <button 
//           onClick={handleAddTodo}
//           disabled={isLoading || !newTodo.trim()}
//           style={{ padding: '8px 16px' }}
//         >
//           {isLoading ? '추가 중...' : '할일 추가'}
//         </button>
//       </div>

//       {/* 로딩중일 때 로딩중 메시지 표시 */}
//       { isLoading && 
//         <p>로딩중...</p>
//       }

//       {/* 에러가 있을 경우 빨간색으로 에러 메시지 표시 */}
//       { error && <p style={{ color: 'red' }}>{ error.message }</p> }

//       {/* Todo 목록을 리스트로 렌더링 */}
//       <ul>
//         { data?.items.map((item) => (
//           <li key={item._id}>{item.title}</li>
//         )) }
//       </ul>
//     </>
//   );
// }

// export default App
