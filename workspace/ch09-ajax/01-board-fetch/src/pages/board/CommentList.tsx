import CommentNew from "@/pages/board/CommentNew";
import type { ReplyType } from "@/types/BoardTypes";

interface PropType {
  replies: ReplyType[];
}

function CommentList({replies=[]} : PropType) {
  const replyList = replies.map(reply => {
    return (
      <li key={reply._id}>
        {reply.content}
      </li>
    );
  })
  return (
    <>
      <h3>댓글 목록</h3>
      <ul>
        {replyList}
      </ul>
      <CommentNew />
    </>
  );
}

export default CommentList;