import type { TodoItem } from "@pages/TodoInfo";
import { Link, useNavigate, useOutletContext } from "react-router";
import { useForm } from "react-hook-form";

interface OutletContextProps {
  item: TodoItem;
}
function TodoEdit() {
  const navigate = useNavigate();
  // useNavigate는 함수를 리턴한다
  // useNavigate(내가 가고 싶은곳 주소)

  const { item } = useOutletContext<OutletContextProps>();

  // TODO React form 다시 보기!!
  // useForm에 디폴트벨류를 세팅 해둠
  const {register, handleSubmit, formState: {errors}} = useForm<TodoItem>({
    defaultValues: {
      title: item.title,
      content: item.content,
      done: item.done
    }
  });

  const updateTodo = (formData: TodoItem) => {
    console.log("API 서버에 수정 요청", formData);
    //TODO API 서버에 수정 요청

    alert("할일이 수정 되었습니다.");

    // 상세보기로 이동
    // navigate("/home");
    // navigate(-1);
    navigate(`/list/${item._id}`);
    // updateTodo에서 할일을 수정(Update)하게되면 이전 목록 페이지로 이동을 하게 된다
    // 그때 navigate(-1)을 함으로서 뒤로가기 버튼을 누른 효과를 준다

    //=== Link는 함수 호출 필요없이 바로 가고 싶을떄
    //=== useNavigate는 언제 사용하냐? -> 함수 안에서 사용할때
  };
  return (
    <>
      <div id="main">
        <h2>할일 수정</h2>
        <div className="todo">
          <form onSubmit={handleSubmit(updateTodo) }>
            <label htmlFor="title">제목 :</label>
            <input 
              type="text" 
              id="title" 
              {...register('title', {
                required: "제목을 입력하세요",
                pattern: {
                  value: /\S/,
                  message: "제목에 공백만 입력할 수 없습니다."
                }
              })}
            />
            <div className='input-error'>{errors.title?.message}</div>
            <br />
            <label htmlFor="content">내용 :</label>
            <textarea 
              id="content" 
              cols={23} 
              rows={5}
              {...register('content', {
                required: "내용을 입력하세요",
                pattern: {
                  value: /\S/,
                  message: "내용에 공백만 입력할 수 없습니다."
                }
              })}
            />
            <div className='input-error'>{errors.content?.message}</div>
            <br />
            <label htmlFor="done">완료 :</label>
            <input 
              type="checkbox" 
              id="done" 
              {...register('done')}
            />
            <br />
            <button type="submit">수정</button>
            <Link to={`/list/${item._id}`}>취소</Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default TodoEdit;