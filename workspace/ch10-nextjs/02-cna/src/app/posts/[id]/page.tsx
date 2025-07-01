import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const data = {
    title: `1번 게시물`,
    content: '게시판 이용 수칙입니다.'
  };

  return {
    title: data.title,
    description: data.content,
  };
}

export default async function InfoPage({params} : {params: { id: string }}) {
  const { id } = await params;
  return (
    <h1>상세 조회 - {id}번 게시물</h1>
  );
}