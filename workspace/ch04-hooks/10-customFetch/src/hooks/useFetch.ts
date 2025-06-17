import { useEffect, useState } from "react";
import type { ResData } from "#types/todo"

// API 서버 엔드포인트 주소 상수 정의
const API_SERVER = 'https://fesp-api.koyeb.app/todo';

// fetch 함수 호출시 필요한 파라미터 타입 정의
interface FetchParams {
  url: string;
}

function useFetch<T>(fetchParams: FetchParams) {
  // Todo 목록을 저장할 상태 (초기값: null)
  const [data, setData] = useState<T | null>(null);

  // 에러 메시지를 저장할 상태 (초기값: null)
  const [error, setError] = useState<Error | null>(null);
  
  // 로딩 상태를 저장할 상태 (초기값: false)
  const [isLoading, setIsLoading] = useState(false);

  // Todo API 서버에 데이터를 요청하는 비동기 함수
  const requestFetch = async (params: FetchParams) => {
    console.log('fetchTodo 함수 호출됨', params);
    try{
      // 로딩 상태를 true로 설정
      setIsLoading(true);
      
      // fetch API를 사용하여 서버에 GET 요청
      // res에 응답 객체가 담긴다.
      const res = await fetch(API_SERVER + params.url);
      console.log('서버 응답:', res);
      // 응답 데이터를 JSON 형식으로 파싱
      const jsonRes: ResData = await res.json();
      console.log('파싱된 데이터:', jsonRes);

      // 응답이 성공적인 경우
      if(jsonRes.ok){
        // Todo 목록 상태 업데이트
        setData(jsonRes as T);
        setError(null);
      }else{
        // 에러가 발생한 경우 에러 메시지 상태 업데이트
        throw new Error(jsonRes.error.message);
      }
    }catch(err){
      // 네트워크 오류 등 예외 발생시 처리
      console.error('에러 발생:', err);
      setError(err as Error);
      setData(null);
    }finally{
      // 성공/실패 여부와 관계없이 로딩 상태를 false로 설정
      setIsLoading(false);
    }
  };

  // 컴포넌트가 마운트될 때 Todo 목록을 가져오기
  useEffect(() => {
  // 1초 지연을 주어 API 호출 (로딩 상태 테스트를 위해)
    requestFetch(fetchParams);
  }, []); // 빈 배열을 전달하여 마운트시 한번만 실행되도록 설정

  return { isLoading, error, data };
}

export default useFetch;

// POST 로직 추가
//=============================

// import { useEffect, useState } from "react";

// // API 서버 엔드포인트 주소 상수 정의
// const API_SERVER = 'https://fesp-api.koyeb.app/todo';

// // fetch 함수 호출시 필요한 파라미터 타입 정의
// interface FetchParams {
//   url: string;
// }

// // Todo 아이템의 타입 정의 (API 응답용)
// interface Todo {
//   _id: number;      // Todo 아이템의 고유 식별자
//   title: string;    // Todo 제목
//   content?: string; // Todo 내용 (선택적)
//   done?: boolean;   // 완료 여부 (선택적)
// }

// // Todo 생성시 사용할 타입 정의 (API 요청용)
// interface CreateTodoRequest {
//   title: string;    // Todo 제목 (필수)
//   content: string;  // Todo 내용 (필수)
// }

// // Todo 목록 조회 성공시 응답 데이터 타입 정의
// interface TodoListRes {
//   ok: 1;  // 성공 여부 (1: 성공)
//   items: Todo[];  // Todo 아이템 배열
//   pagination: {   // 페이지네이션 정보
//     page: number;      // 현재 페이지
//     limit: number;     // 페이지당 아이템 수
//     total: number;     // 전체 아이템 수
//     totalPages: number; // 전체 페이지 수
//   };
// }

// // 에러 응답 데이터 타입 정의
// interface ErrorRes {
//   ok: 0;  // 성공 여부 (0: 실패)
//   error: Error; // 에러 객체
// }

// // 응답 데이터 타입 정의
// type ResData = TodoListRes | ErrorRes;

// function useFetch(fetchParams: FetchParams) {
//   // Todo 목록을 저장할 상태 (초기값: null)
//   const [data, setData] = useState<TodoListRes | null>(null);

//   // 에러 메시지를 저장할 상태 (초기값: null)
//   const [error, setError] = useState<Error | null>(null);
  
//   // 로딩 상태를 저장할 상태 (초기값: false)
//   const [isLoading, setIsLoading] = useState(false);

//   // Todo: API 서버에 데이터를 요청하는 비동기 함수
//   const requestFetch = async (params: FetchParams) => {
//     console.log('fetchTodo 함수 호출됨', params);
//     try{
//       // 로딩 상태를 true로 설정
//       setIsLoading(true);
      
//       // fetch API를 사용하여 서버에 GET 요청
//       // res에 응답 객체가 담긴다.
//       // TODO: 서버에 API GET 요청
//       const res = await fetch(API_SERVER + params.url);
//       console.log('서버 응답:', res);
//       // 응답 데이터를 JSON 형식으로 파싱
//       const jsonRes: ResData = await res.json();
//       console.log('파싱된 데이터:', jsonRes);

//       // 응답이 성공적인 경우
//       if(jsonRes.ok){
//         // Todo 목록 상태 업데이트
//         setData(jsonRes);
//         setError(null);
//       }else{
//         // 에러가 발생한 경우 에러 메시지 상태 업데이트
//         throw new Error(jsonRes.error.message);
//       }
//     }catch(err){
//       // 네트워크 오류 등 예외 발생시 처리
//       console.error('에러 발생:', err);
//       setError(err as Error);
//       setData(null);
//     }finally{
//       // 성공/실패 여부와 관계없이 로딩 상태를 false로 설정
//       setIsLoading(false);
//     }
//   };

//   // TODO:  API 서버에 POST 요청
//   const requestPost = async(params: FetchParams, todo: CreateTodoRequest) => {
//     console.log('requestPost 호출됨', todo);
//     try {
//         setIsLoading(true);

//         // 요청 데이터 확인
//         console.log('전송할 데이터:', JSON.stringify(todo));

//         const res = await fetch(API_SERVER + params.url, {
//           method: 'POST',
//           // headers : 요청의 본문(body)이 어떤 타입인지 서버에게 알려주는 것
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           // JS 객체를 문자열로 바꿔주는 함수
//           // Why? fetch()에서 POST 요청을 할 때는 body에는 순수 텍스트만 보낼 수 있다.
//           body: JSON.stringify(todo)
//         });
        
//         const jsonRes: ResData = await res.json();
//         console.log('POST 응답 데이터', jsonRes);

//         if(jsonRes.ok) {
//           await requestFetch(fetchParams);
//           setError(null);
//         } else {
//           throw new Error(jsonRes.error.message);
//         }
//       } catch (err) {
//         console.error('에러 발생', err);
//         setError(err as Error);
//         setData(null);
//       } finally {
//         setIsLoading(false);
//       }
//     }

//   // 컴포넌트가 마운트될 때 Todo 목록을 가져오기
//   useEffect(() => {
//     // 1초 지연을 주어 API 호출 (로딩 상태 테스트를 위해)
//     requestFetch(fetchParams);
//   }, []); // 빈 배열을 전달하여 마운트시 한번만 실행되도록 설정

//   return { isLoading, error, data, requestPost };
// }

// export default useFetch;