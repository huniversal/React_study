"use server"; // 서버 함수
import { Post } from "@/types/board";
// 서버 함수 (fetchPosts) -> 외부 API에서 데이터 가져오기
// 서버 함수 단계별 동작
/*
* 1. 외부 API에 요청
* const res = await fetch(`https://fesp-api.koyeb.app/market/posts?type=qna`, {
* headers: {
*   'Client-Id': 'openmarket'  // API 사용 인증
* }
* });
* posts?type=qna -> 'qna 타입의 게시물만 가져오기'
*/

/* 서버 액션과 서버 함수의 차이점 
* 서버 액션 : 데이터 변경하기(쓰기) -> POST, PUT, DELETE
* 서버 함수 : 데이터 가져오기(읽기) -> GET
*/
export async function fetchPosts (): Promise<Post[]> {
  // 준비된 API 서버 호출
  const res = await fetch(`https://fesp-api.koyeb.app/market/posts?type=qna`, {
    headers: {
      'Client-Id': 'openmarket'
    },
    next: {
      tags: ['list', 'free']
    },
    // cache: 'no-cache'  // next 15 기본값
    cache: 'force-cache'  // next 14 기본값
  });

  /*
  * 2. 응답을 JSON으로 변환
  * const data = await res.json();
  * 서버가 보낸 데이터를 js 객체로 변환
  */
  const data = await res.json();
  console.log('boardFetch', data.item.length);
  return data.item;
}