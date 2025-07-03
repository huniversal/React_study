/* 
*[사용자] -> [RegisterForm.tsx의 <form>] 
*        -> (자동으로 submit)
*        -> [formAction 함수 실행] -> createPost 실행
*        -> [서버에서 DB 요청 후 결과 응답]
*        -> [isPending 상태 false로 변경, state 갱신]
*/

"use client"
// 그냥 useHook 사용하면 무조건 클라이언트
import { createPost } from "@/data/actions/boardAction";
import { useActionState } from "react";

export default function RegisterForm() {
  const [state, formAction, isPending] = useActionState(createPost, null);
	// formAction: <form action={formAction}>에 넣을 함수
	// 이거 누르면 자동으로 createPost() 서버 액션이 실행됨
	// isPending: 요청 중이면 true로 바뀜. 로딩 표시 만들 때 씀
	// state: createPost가 반환한 응답 데이터를 받을 수 있음

  console.log("isPending state", isPending, state);
  return (  
    <form action={formAction} className='space-y-4'>
      {/* action={formAction}을 통해 자동으로 createPost() 호출 */}
      <div className='flex flex-col'>
        <label htmlFor='title' className='mb-1 text-sm font-medium text-gray-700'>
          제목
        </label>
        <input type='text' id='title' name='title' className='border border-gray-500 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='제목을 입력하세요' />
      </div>
      <div className='flex flex-col'>
        <label htmlFor='content' className='mb-1 text-sm font-medium text-gray-700'>
          내용
        </label>
        <textarea id='content' name='content' rows={6} className='border border-gray-500 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='내용을 입력하세요' />
      </div>
      <div className='text-right'>
        <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow'>
          등록
        </button>
      </div>
    </form>
  );
}