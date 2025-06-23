import useAxiosInstance from '@hooks/useAxiosInstance';
import type { TodoItem } from "./TodoInfo";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { useState } from "react";

// TODO 리셋이 안되는 문제 해결하기
function TodoAdd() {
  'use no memo';
  const [formKey, setFormKey] = useState(0); 
  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm<TodoItem>({
    defaultValues: {
      title: '',
      content: '',
      done: false,
    },
  });

  const axiosInstance = useAxiosInstance();
  const addTodo = async (formData: TodoItem) => {
    console.log("API 서버에 등록 요청", formData);
    // TODO API 서버에 등록 요청
    try { 
      // const res = await axiosInstance.post<{item: TodoItem}>('/todolist', formData);
      await axiosInstance.post('/todolist', formData);

      reset();
      // setFocus('title'); // 폼을 초기화하고 제목 입력창에 포커스
      // setFormKey(prevKey => prevKey + 1); // 폼 리셋을 위해 키를 변경
      // const newItem = res.data?.item;
      alert("할일이 등록되었습니다.");
      // navigate(`/list/${newItem._id}`)
      
    } catch (err) {
      console.error(err);
      alert("할일 등록에 실패했습니다.");
    }

  };
  return (
    <div id="main">
      <h2>할일 추가</h2>
      <div className="todo">
        <form key={formKey} onSubmit={handleSubmit(addTodo)}>
          <label htmlFor="title">제목 :</label>
          <input
            type="text"
            id="title"
            autoFocus
            {...register("title", {
              required: "제목을 입력하세요.",
              pattern: {
                value: /\S/,
                message: "제목에 공백만 입력할 수 없습니다.",
              },
            })}
          />
          <div className="input-error">{errors.title?.message}</div>
          <br />
          <label htmlFor="content">내용 :</label>
          <textarea
            id="content"
            cols={23}
            rows={5}
            {...register("content", {
              required: "내용을 입력하세요.",
              pattern: {
                value: /\S/,
                message: "내용에 공백만 입력할 수 없습니다.",
              },
            })}
          ></textarea>
          <div className="input-error">{errors.content?.message}</div>
          <br />
          <button type="submit">추가</button>
          <Link to="/list">취소</Link>
        </form>
      </div>
    </div>
  );
}

export default TodoAdd;

// import useAxiosInstance from '@hooks/useAxiosInstance';
// import type { TodoItem } from "./TodoInfo";
// import { useForm, } from "react-hook-form";
// import { Link, useNavigate } from "react-router";
// import { useState } from "react";

// // TODO 과제 : 리셋이 안되는 문제 해결하기
// function TodoAdd() {
//   // const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     reset,
//     setFocus,
//     resetField,
//     formState: { errors },
//   } = useForm<TodoItem>({
//     defaultValues: {
//       title: '',
//       content: '',
//       done: false,
//     },
//   });


//   const axiosInstance = useAxiosInstance();
//   const addTodo = async (formData: TodoItem) => {
//     console.log("API 서버에 등록 요청", formData);
//     // TODO API 서버에 등록 요청
//     try {
//       // const res = await axiosInstance.post<{item: TodoItem}>('/todolist', formData);
//       await axiosInstance.post('/todolist', formData);

//       // reset({
//       //   title: '',
//       //   content: '',
//       //   done: false,
//       // });
//       resetField('title', { defaultValue: '' });
//       resetField('content', { defaultValue: '' });
//       setFocus('title'); // 폼을 초기화하고 제목 입력창에 포커스
//       // const newItem = res.data?.item;
//       alert("할일이 등록되었습니다.");
//       // navigate(`/list/${newItem._id}`)
      
//     } catch (err) {
//       console.error(err);
//       alert("할일 등록에 실패했습니다.");
//     }


//   };
//   return (
//     <div id="main">
//       <h2>할일 추가</h2>
//       <div className="todo">
//         <form onSubmit={handleSubmit(addTodo)}>
//           <label htmlFor="title">제목 :</label>
//           <input
//             type="text"
//             id="title"
//             autoFocus
//             {...register("title", {
//               required: "제목을 입력하세요.",
//               pattern: {
//                 value: /\S/,
//                 message: "제목에 공백만 입력할 수 없습니다.",
//               },
//             })}
//           />
//           <div className="input-error">{errors.title?.message}</div>
//           <br />
//           <label htmlFor="content">내용 :</label>
//           <textarea
//             id="content"
//             cols={23}
//             rows={5}
//             {...register("content", {
//               required: "내용을 입력하세요.",
//               pattern: {
//                 value: /\S/,
//                 message: "내용에 공백만 입력할 수 없습니다.",
//               },
//             })}
//           ></textarea>
//           <div className="input-error">{errors.content?.message}</div>
//           <br />
//           <button type="submit">추가</button>
//           <Link to="/list">취소</Link>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default TodoAdd;