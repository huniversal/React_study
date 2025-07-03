/* 
*[사용자] -> [RegisterForm.tsx의 <form>] 
*        -> (자동으로 submit)
*        -> [formAction 함수 실행] -> createPost 실행
*        -> [서버에서 DB 요청 후 결과 응답]
*        -> [isPending 상태 false로 변경, state 갱신]
*/

"use server";
import { PostInfoRes } from '@/types/board';

// 서버 액션
// 일반적인 방법 : 폼 제출 -> JS -> API 호출 -> 서버
// 서버 액션 : 폼 제출 -> 바로 서버에서 실행

// 게시글 등록
// prevState : 이전 상태
// formData : 폼에서 전송된 데이터들

/* 서버 액션과 서버 함수의 차이점 
* 서버 액션 : 데이터 변경하기(쓰기) -> POST, PUT, DELETE
* 서버 함수 : 데이터 가져오기(읽기) -> GET
*/
export async function createPost(prevState: PostInfoRes, formData: FormData) {
  // prevState : 이전 상태값, 사용 안 해도 있어야 함, why? -> useActionState에서 사용됨
  // formData: form에서 전송된 input 데이터 전부 들어있음

  const title = formData.get('title');  // 제목 추출 -> 폼 데이터 가져온거
  const content = formData.get('content');  // 내용 추출 -> 폼 데이터 가져온거

  const body = {title, content, type: 'qna'}; // 서버로 보낼 데이터 준비
  console.log(body);
  const res = await fetch(`https://fesp-api.koyeb.app/market/posts`, {
    method: 'POST', // 데이터 생성 
    body: JSON.stringify({title, content, type: 'qna' }), // JSON 변환
    headers: {
      'Client-Id': 'openmarket',  // API 인증
      'Content-Type': 'application/json', // JSON 형식이라고 알려주기
    }
  });
  const data = await res.json();
  return data;
} 