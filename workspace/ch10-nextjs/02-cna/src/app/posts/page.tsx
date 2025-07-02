import { Metadata } from "next";
import Link from "next/link";
import { fetchPosts } from "@/data/functinos/boardFetch";

export const metadata: Metadata = {
  title: "게시물 목록 조회",
  description: "게시물 목록 조회 페이지입니다.",
};
export default async function ListPage() {
  await new Promise((res) => {setTimeout(res, 2000)});
  // const dummyList = [];
  // for (let i = 1; i <= 10; i++) {
  //   dummyList.push({
  //     id: i,
  //     title: i + "번 게시물",
  //   });
  // }

  const data = await fetchPosts();

  console.log("API 서버로부터 받은 게시물 목록 수", data.length);
  const posts = data.map((post) => (
    <li key={post._id}>
      {/* <Link prefetch={true} href={`/posts/${post.id}`}> */}
      <Link href={`/posts/${post._id}`}>
        {post._id} - {post.title}
      </Link>
    </li>
  ));

  return (
    <>
      <h1>목록 조회</h1>
      <ul>{posts}</ul>
    </>
  );
}