import { Link, Outlet, useParams, useMatch } from "react-router";

export interface TodoItem {
  _id: number;
  title: string;
  content?: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
}

const data = {
  _id: 2,
  title: '자바스크립트 복습',
  content: '리액트도 당연히 복습.',
  done: false,
  createdAt: '2025.06.17 16:49:00',
  updatedAt: '2025.06.17 16:49:00',
};

function TodoInfo() {

  // "/list/:_id" 정의된 path 값이 있을 때 
  // 주소창의 값이 "/list/3" 일 경우 useParams()가 리턴하는 값: { _id: 3 }
  const { _id } = useParams();
  console.log(useParams());
  const infoMatch = useMatch('/list/:_id');

  // useEffect(() => {
  //   // TODO API 서버와 통신해서 item 받아오기

  // }, [])

  return (
    <div id="main">
      <h2>할일 상세 보기</h2>
      <div className="todo">
        <div>제목 : {data.title}</div>
        <div>내용 : {data.content}</div>
        <div>상태 : {data.done ? '완료' : '미완료'}</div>
        <div>작성일 : {data.createdAt}</div>
        <div>수정일 : {data.updatedAt}</div>
        { infoMatch && 
        
        <>        
          <Link to={`/list/${_id}/edit`}>수정</Link>
          <Link to="/list">목록</Link>
        </>}
      </div>

      <Outlet context={ data  } />

    </div>
  );
}

export default TodoInfo;