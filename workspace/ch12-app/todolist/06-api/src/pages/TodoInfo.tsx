import useAxiosInstance from '@hooks/useAxiosInstance';
import { Link, Outlet, useParams, useMatch, useLocation } from "react-router";
import { useState, useEffect, use } from 'react';
  // useParams()는 브라우저에 명시한 URL 파라미터의 값을 가져오는 커스텀 훅
export interface TodoItem {
  _id: number;
  title: string;
  content?: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
}

const item = {
  _id: 2,
  title: '자바스크립트 복습',
  content: '리액트도 당연히 복습.',
  done: false,
  createdAt: '2025.06.17 16:49:00',
  updatedAt: '2025.06.17 16:49:00',
};

function TodoInfo() {
  const axiosInstance = useAxiosInstance();

  // "/list/:_id" 정의된 path 값이 있을 때 
  // 주소창의 값이 "/list/3" 일 경우 useParams()가 리턴하는 값: { _id: 3 }
  // useParams()는 브라우저에 명시한 URL 파라미터의 값을 가져오는 커스텀 훅
  const { _id } = useParams();
  const location = useLocation(); // location 추가
  console.log(useParams());
  const infoMatch = useMatch('/list/:_id');

  const [data, setData] = useState<TodoItem | null>(null);

  const fetchTodoInfo = async () => {
    console.log("API 서버에 상세 정보 요청");
    try {
      const res = await axiosInstance.get<{ item: TodoItem }>(`/todolist/${_id}`);
      setData(res.data.item);
    } catch(err) {
      console.error(err);
      alert("할일 조회에 실패했습니다.");
    }
  };

  useEffect(() => {
    fetchTodoInfo();

  }, [_id, location.state])

  return (
    <div id="main">
      <h2>할일 상세 보기</h2>

      { data && 
        <>
          <div className="todo">
            <div>제목 : {data.title}</div>
            <div>내용 : {data.content}</div>
            <div>상태 : {data.done ? '완료' : '미완료'}</div>
            <div>작성일 : {data.createdAt}</div>
            <div>수정일 : {data.updatedAt}</div>
            {/* 현재 URL이 특정 경로인지 조건부 렌더링할때 useMatch 사용 */}
            { infoMatch && // 상세보기 화면에서만 노출
              <>        
                <Link to={`/list/${_id}/edit`}>수정</Link>
                <Link to="/list">목록</Link>
              </>
            }
            </div>
            <Outlet context={{ item: data }} />
          </>
      }

      {/*  자식 라우트가 렌더링되는 위치 */}
    </div>
  );
}

export default TodoInfo;