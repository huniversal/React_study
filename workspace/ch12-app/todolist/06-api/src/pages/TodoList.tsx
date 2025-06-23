import useAxiosInstance from '@hooks/useAxiosInstance';
import type { TodoItem } from "@pages/TodoInfo";
import TodoListItem from "@pages/TodoListItem";
import { useState, useEffect } from 'react';
import { Link } from "react-router";

interface TodoList {
  items: TodoItem[];
}

function TodoList() {

  const axios = useAxiosInstance();
  const [data, setData] = useState<TodoList | null>(null);

  // 할일 목록을 API 서버에서 조회
  // =============================================
  // 목록 조회
  // =============================================
  const fetchTodoList = async () => {
    console.log('API 서버에 목록 요청해야 한다.');
    // TODO API 서버에 목록 요청
    try {
      const res = await axios.get<TodoList>('/todolist');
      setData(res.data);
    } catch (err) {
      console.error("목록 조회 실패", err);
      alert(" 목록 조회에 실패했습니다.");
    }
  };

  // =============================================
  // 삭제 처리
  // =============================================
  const handleDelete = async (_id: number) => {
    // 1. 먼저 사용자에게 확인받기
    if (!confirm("정말 삭제하시겠습니까?")) {
      return; // 취소하면 함수 종료
    }

    console.log("API 서버에 삭제 요청", _id);

    try {
      // TODO API 서버에 삭제 요청
      await axios.delete(`todolist/${_id}`);
      
      // 삭제 성공 - 로컬 상태 업데이트
      const newItems = data?.items.filter(item => item._id !== _id);
      setData({ items: newItems || [] });
      
      alert('삭제 완료');
    } catch (err) {
      console.error('삭제 실패:', err);
      alert('삭제에 실패했습니다.');
    }
  };

  // 컴포넌트가 마운트를 할 때 목록 조회
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