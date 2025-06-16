import Todo from "@pages/Todo";
// import type { TodoItem } from "@pages/TodoItem";
import todoReducer from "@pages/todoReducer";
import { useReducer, useRef, useCallback, useEffect } from "react";
import useFetch from "../hooks/useFetch";

function TodoContainer() {
  // 서버에서 데이터 받아오기
  const { isLoading, error, data, requestPost } = useFetch({ url: '/todolist?delay=1000' });

  // useReducer: 초기값은 일단 빈배열로 시작
  const [itemList, todoDispatch] = useReducer(todoReducer, []);

  // nextId는 useRef로 관리 (초기값은 1, 나중에 data 들어오면 보정)
  const nextId = useRef(1);

  // 데이터 받아오면 초기 상태 세팅
  useEffect(() => {
    if (data?.items) {
      const newList = data.items.map(item => ({
        _id: item._id,
        title: item.title,
        done: item.done ?? false
      }));

      todoDispatch({ type: 'INIT', value: newList });
      nextId.current = data.items.length + 1;
    }
  }, [data]);

  // 추가
  const addItem = useCallback(async (title: string) => {
    const newTodo = { title, content: '빈내용' };
    await requestPost({ url: '/todolist' }, newTodo);
  }, [requestPost]);

  // 완료 토글
  const toggleDone = useCallback((_id: number) => {
    todoDispatch({ type: 'TOGGLE', value: { _id } });
  }, [todoDispatch]);

  // 삭제
  const deleteItem = useCallback((_id: number) => {
    todoDispatch({ type: 'DELETE', value: { _id } });
  }, [todoDispatch]);

  // 로딩 & 에러 처리 (조건부 렌더링)
  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p style={{ color: 'red' }}>{error.message}</p>;


  return (
    <Todo itemList={itemList} addItem={addItem} toggleDone={toggleDone} deleteItem={deleteItem} />
  );
}

export default TodoContainer;