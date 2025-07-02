import { NextRequest, NextResponse } from 'next/server';

// 지원 메소드 선언
export async function GET(request: NextRequest, {params}: {params: Promise<{id: string}>}) {
  const { id } = await params;
  console.log("GET 라우트 핸들러", id);
  // 실제 작업


  const data = {id, title: "가짜 제목"}
  return NextResponse.json(data);
}

export function POST() {
  return NextResponse.json("route handler의 POST 응답");
  
}

export function DELETE() {
  
}