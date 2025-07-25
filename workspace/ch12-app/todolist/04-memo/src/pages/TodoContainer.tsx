import Todo from "@pages/Todo";
import type { TodoItem } from "@pages/TodoItem";
import todoReducer from "@pages/todoReducer";
import { useReducer, useRef, useCallback, useEffect } from "react";

function TodoContainer(){
  "use no memo"
  // 샘플 목록
  const initItemList: TodoItem[] = [
    { _id: 1, title: '자바스크립트 공부', done: true },
    { _id: 2, title: 'JS 프로젝트', done: true },
    { _id: 3, title: 'React 공부', done: false },
  ];

  for(let i = 4; i<100; i++){
    initItemList.push({ _id: i, title:`샘플-${i}`, done: false })
  }

  const nextId = useRef(initItemList.length + 1);

  // 상태가 수정되면 자동으로 화면이 리렌더링 된다.
  const [ itemList, todoDispatch ] = useReducer(todoReducer, initItemList);

  // 할일 추가
  const addItem = useCallback((title: string) => {
    const item: TodoItem = { _id: nextId.current++, title, done: false };
    todoDispatch({ type: 'ADD', value: item });
  }, [todoDispatch]);

  const prevAddItem = useRef(addItem);
  useEffect(()=> {
    console.log("addItem 참조 변경", prevAddItem.current === addItem)
  })

  // TODO 1 useCallback으로 콜백 함수 메모이제이션
  // 완료/미완료 처리
  const toggleDone = useCallback((_id: number) => {
    todoDispatch({ type: 'TOGGLE', value: { _id } });
  }, [todoDispatch])

  // 할일 삭제
  const deleteItem = useCallback((_id: number) => {
    todoDispatch({ type: 'DELETE', value: { _id } });
  }, [todoDispatch])

  return (
    <Todo itemList={ itemList } addItem={ addItem } toggleDone={ toggleDone } deleteItem={ deleteItem } />
  );
}

export default TodoContainer;