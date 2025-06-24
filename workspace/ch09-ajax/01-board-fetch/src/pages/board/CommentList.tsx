import CommentNew from "@/pages/board/CommentNew";
import type { ReplyType } from "@/types/BoardTypes";
import { useEffect, useState } from "react"

function CommentList() {
  // 서버의 데이터를 저장할 상태
  const [data, setData] = useState<ReplyType[] | null>(null);
  // 로딩 상태
  const [isLoading, setIsLoading] = useState(false);

  // 에러 상태 
  const [error, setError] = useState<Error | null>(null);

  // API 서버에 1번 게시물의 댓글 목록을 fetch() 요청으로 보낸다. 
  const requestCommentList = async () => {
    try {
      setIsLoading(true); // 로딩 시작

      // fetch()는 바디가 없는 GET 요청을 보낸다.
      const response = await fetch( "https://fesp-api.koyeb.app/market/posts/1/replies?page=1&limit=5&delay=1000", {
        headers: {
          'Client-ID': 'openmarket'
        }
      });
      console.log('response', response);
  
      const jsonData = await response.json();
      console.log('jsonData', jsonData);

      if(jsonData.ok) { // 응답이 성공일 경우
        // 댓글 목록 출력
        setData(jsonData.item);
      } else {  // 응답이 실패일 경우
        // 에러 메시지 출력
        throw new Error(jsonData.message);
      }
    } catch(err) {
      setError(err as Error);
    } finally {
      setIsLoading(false); // 로딩 종료
    }
  }

  useEffect(() => {
    requestCommentList();
  }, []);

  const replyList = data?.map(reply => {
    return (
      <li key={reply._id}>
        {reply.content}
      </li>
    );
  })
  return (
    <>
      <h3>댓글 목록</h3>
      { isLoading && <p>댓글 로딩중...</p>}
      { error && <p>{ error.message }</p>}
      { data && 
        <>
          <ul>
            {replyList}
          </ul>
          <CommentNew />
        </>
      }
    </>
  );
}

export default CommentList;