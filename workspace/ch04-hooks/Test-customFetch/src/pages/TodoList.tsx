import useAxios from '@hooks/useAxios';
import type { TodoListRes } from '#types/todo';

function TodoList() {
  const { data, isLoading, error } = useAxios<TodoListRes>({ url: '/todolist?delay=1000' });

  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생: {error.message}</p>;

  return (
    <>
      <h1>할일 목록</h1>
      <ul>
        {data?.items.map(item => (
          <li key={item._id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;