import { Metadata } from "next";
import Link from "next/link";
import { fetchPosts } from "@/data/functinos/boardFetch";

// 페이지 컴포넌트 (ListPage) -> 서버 함수 호출해서 데이터 받기
export const metadata: Metadata = {
  title: "게시물 목록 조회",
  description: "게시물 목록 조회 페이지입니다.",
};
export default async function ListPage() {
  await new Promise((res) => {setTimeout(res, 2000)});

  const data = await fetchPosts();  // 서버 함수에서 게시물 배열 받아오기

  console.log("API 서버로부터 받은 게시물 목록 수", data.length);

  // 데이터 가공
  const posts = data.map((post) => (
    <li key={post._id}>
      {/* <Link prefetch={true} href={`/posts/${post.id}`}> */}
      <Link href={`/posts/${post._id}`}>
        {post._id} - {post.title}
      </Link>
    </li>
  ));

  // 화면에 렌더링
  return (
    <>
      <h1>목록 조회</h1>
      <ul>{posts}</ul>
    </>
  );
}