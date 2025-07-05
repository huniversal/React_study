import CommentNew from "@/app/[boardType]/[_id]/CommentNew"
import CommentItem from "@/app/[boardType]/[_id]/CommentItem";
import Image from "next/image";
import Link from "next/link";
import { getReplies } from "@/data/functions/post";
import { PostReply } from "@/types";

export default async function CommentList({_id}: {_id: string}) {
  const res = await getReplies(Number(_id));
  return (
    <section className="mb-8">
      <h4 className="mt-8 mb-4 ml-2">댓글 { res.ok ? res.item.length : 0 }개</h4>
        { res.ok ? 
          res.item.map((reply: PostReply) => (
            <CommentItem key={reply._id} reply={reply} />
          )) : 
          <p>{ res.message }</p>
        }
      <div className="shadow-md rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <Image
              className="w-8 mr-2 rounded-full"
              src="https://fesp-api.koyeb.app/market/files/openmarket/user-muzi.png"
              alt="무지 프로필 이미지"
              width="32"
              height="32"
            />
            <Link href="" className="text-orange-400">무지</Link>
          </div>
          <time className="text-gray-500" dateTime="2025.06.30 15:11:22">2025.06.30 15:11:22</time>
        </div>
        <div className="flex justify-between items-start mb-2">
          <p className="whitespace-pre-wrap text-sm flex-1">와~ 신세계네요...</p>
          <form action="#" className="inline ml-2">
            <button type="submit" className="bg-red-500 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">삭제</button>
          </form>
        </div>
      </div>
      <CommentNew _id={ _id } />
    </section>
  )
}