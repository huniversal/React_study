// NextJS의 API Route Hanlder
// 쉽게 설명하면 웹 사이트 안에 있는 작은 서버이다. 

import { NextRequest, NextResponse } from "next/server";

// 게시물 상세 조회
export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }){
  /* 
  * request: NextRequest -> HTTP 요청에 대한 모든 정보가 들어있음(헤더, 쿠키, URL, 바디 등등)
  * NextResponse -> 응답을 어떻게 줄지 정의하는 객체 
  * 
  * { params }  // 구조분해할당으로 params만 추출
  * ❤️ 여기에서 params란? -> URL 경로에서 추출한 변수들이다. 
  * 그래서 여기에서 params가 왜 Promise인 이유는 Next.js에서는 URL 매개변수 처리가 비동기로 이루어지기 때문이다. 
  * : { params: Promise<{ id: string }> }  // 타입 정의
  * 우리는 params만 필요하기 때문에 구조분해할당으로 빼낸것
  */
  //==========================================================
  /*
  * 단계별로 이해하면 
  * 🚀 1단계 : 전체 객체 받기
  * function GET(request, context) {
  * const params = context.params;  // 이렇게 해야 함
  * } -
  *
  * 🚀 2단계 : 구조분해할당으로 간단하게 
  * function GET (request, { params }) { -> params만 바로 추출
  * }
  * 
  * 🚀 3단계 : 타입 지정
  * function GET(request, { params }: { params: Promise<{ id: string }> }) {
  * // params의 타입을 명시해서 안전하게 사용
  * }
  */

  const { id } = await params;
  console.log('GET 라우트 핸들러', id);
  // DB 연동해서 상세 정보 조회 작업을 직접 구현(풀스택)
  
  // 준비된 API 서버 호출
  const res = await fetch(`https://fesp-api.koyeb.app/market/posts/${id}`, {
    headers: {
      'Client-Id': 'openmarket'
    }
  });

  // 서버 응답을 JSON 형태로 반환
  const data = await res.json();
  // const data = { id, title: '가짜 제목' };
  return NextResponse.json(data);
}

export function POST(){
  return NextResponse.json('route handler의 POST 응답');
}

export function DELETE(){
  return NextResponse.json('route handler의 DELETE 응답');
}