import { Metadata } from "next";

export async function Info({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = await params;

  const data = {
    title: `${ id }번 게시물`,
    content: '게시판 이용 수칙입니다.'
  };

  return {
    title: data.title,
    description: data.content,
  };
}

export default async function SlugPage({ params }: { params: { id: string, slug: string[] } }) {
  const pageParamas = await params;
  console.log(pageParamas);
  switch (pageParamas.slug?.[0]) {
    case 'likes':
      // 좋아요 목록 출력

    case 'favorites':
      // 즐겨찾기 목록 출력

  }
  return (
    <>
      <h1>상세 조회 - { pageParamas.id }번 게시물</h1>
      { pageParamas.slug?.[0] &&
        <h2>{ pageParamas.id }번 게시물의 { pageParamas.slug?.[0] === 'likes' ? '좋아요 목록' : '즐겨찾기 목록' }</h2>
      }
      {pageParamas.slug?.[1] && 
        <h3>{ pageParamas.slug?.[1] } 상세 정보 출력</h3>
      }
    </>
  );
}