import { Link, Outlet, useMatch, useParams } from "react-router";

export interface TodoItem {
  _id: number;
  title: string;
  content?: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
}

function TodoInfo() {

  // "/list/:_id" 정의된 path 값이 있을 때 
  // 주소창의 값이 "/list/3" 일 경우 useParams()가 리턴하는 값: { _id: 3 }
  const { _id } = useParams();

  console.log(useParams());

  const infoMatch = useMatch('/list/:_id');

  return (
    <div id="main">
      <h2>할일 상세 보기</h2>
      <div className="todo">
        <div>제목 : 잠자기</div>
        <div>내용 : 주말에 수업 끝나면 잠이나 실컷 자야지</div>
        <div>상태 : 미완료</div>
        <div>작성일 : 2025.06.16 12:23:45</div>
        <div>수정일 : 2025.06.16 13:45:12</div>

        { infoMatch && 
          <>
            <Link to={`/list/${_id}/edit`}>수정</Link>
            <Link to="/list">목록</Link>
          </>
        }
        
      </div>

      <Outlet />

    </div>
  );
}

export default TodoInfo;