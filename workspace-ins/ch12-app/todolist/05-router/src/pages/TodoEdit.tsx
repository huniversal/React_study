import { Link, useNavigate } from "react-router";

function TodoEdit() {

  const navigate = useNavigate();

  const updateTodo = (event: React.FormEvent) => {
    event.preventDefault();
      // TODO API 서버에 수정 요청

      alert('할일이 수정 되었습니다.');

      // 상세 보기로 이동
      navigate(-1); // window.history.go(-1);
      // navigate(`/list/3`);
  }

  return (
    <>
      <h2>할일 수정</h2>
      <div className="todo">
        <form onSubmit={ updateTodo }>
          <label htmlFor="title">제목 :</label>
          <input type="text" id="title" value="잠자기" autoFocus />
          <br />
          <label htmlFor="content">내용 :</label>
          <textarea id="content" cols={23} rows={5}>주말에 수업 끝나면 잠이나 실컷 자야지</textarea>
          <br />
          <label htmlFor="done">완료 :</label>
          <input type="checkbox" id="done" checked />
          <br />
          <button type="submit">수정</button>
          <Link to="/list/3">취소</Link>
        </form>
      </div>
    </>
  );
}

export default TodoEdit;