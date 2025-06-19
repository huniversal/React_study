import useAxiosInstance from '@hooks/useAxiosInstance';
import type { TodoItem } from "@pages/TodoInfo";
import TodoListItem from "@pages/TodoListItem";
import { useState, useEffect } from 'react';
import { Link } from "react-router";

interface TodoList {
  items: TodoItem[];
}

// const dummyData: TodoList = {
//   items: [{
//     _id: 1,
//     title: '잠자기',
//     done: true,
//     createdAt: '2025.06.16 16:49:00',
//     updatedAt: '2025.06.16 16:49:00',
//   }, {
//     _id: 2,
//     title: '자바스크립트 복습',
//     done: false,
//     createdAt: '2025.06.17 16:49:00',
//     updatedAt: '2025.06.17 16:49:00',
//   }]
// };

function TodoList() {

  const axios = useAxiosInstance();
  const [data, setData] = useState<TodoList | null>(null);

  // 할일 목록을 API 서버에서 조회
  const fetchTodoList = async () => {
    console.log('API 서버에 목록 요청해야 한다.');
    // TODO API 서버에 목록 요청
    const res = await axios.get<TodoList>('/todolist');

    setData(res.data);
  };
  // 삭제 처리
  const handleDelete = (_id: number) => {
    console.log("API 서버에 삭제 요청", _id);

    // TODO API 서버에 삭제 요청
    const res = axios.delete(`todolist/${_id}`);
    // 삭제 성공
    const newItems = data?.items.filter(item => item._id !== _id);
    setData({ items: newItems || [] });
    alert('삭제 완료');
    // TODO API 서버에 목록 요청
    fetchTodoList();
  };

  useEffect(()=>{
    fetchTodoList();
  }, []); // 빈 배열을 전달해서 마운트시에만 실행

  const itemList = data?.items.map(item => 
    <TodoListItem key={ item._id } item={ item } handleDelete={handleDelete} />);

  return (
    <div id="main">
      <h2>할일 목록</h2>
      <div className="todo">
        <Link to="/add">추가</Link>
        <br />
        <form className="search">
          <input type="text" autoFocus />
          <button type="submit">검색</button>
        </form>
        <ul className="todolist">
          { itemList }
        </ul>
      </div>
    </div>
  );
}

export default TodoList;