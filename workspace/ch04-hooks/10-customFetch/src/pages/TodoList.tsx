import useFetch from '@hooks/useAxios';
import type { TodoListRes } from "#types/todo";
const TodoList = () => {
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
          <li key={item._id}><a href={`/todolist/${item._id}`}>{item.title}</a></li>
        )) }
      </ul>
    </>
  );
}

export default TodoList
