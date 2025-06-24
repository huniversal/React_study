import CommentList from "@/pages/board/CommentList";
import { useEffect, useState } from "react";
import type { BoardInfoType } from "@/types/BoardTypes";

function BoardInfo() {
  // 서버의 데이터를 저장할 상태
  const [data, setData] = useState<BoardInfoType | null>(null);
  // 로딩 상태
  const [isLoading, setIsLoading] = useState(false);

  // 에러 상태 
  const [error, setError] = useState<Error | null>(null);

  // API 서버에 1번 게시물의 상세 정보를 fetch() 요청으로 보낸다. 
  const requestInfo = async () => {
    try {
      setIsLoading(true); // 로딩 시작

      // fetch()는 바디가 없는 GET 요청을 보낸다.
      const response = await fetch( "https://fesp-api.koyeb.app/market/posts/1?delay=1000", {
        headers: {
          'Client-ID': 'openmarket'
        }
      });
      console.log('response', response);
  
      const jsonData = await response.json();
      console.log('jsonData', jsonData);

      if(jsonData.ok) { // 응답이 성공일 경우
        // 게시물 상세 정보 출력
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
    requestInfo();
  }, []);

  return (
    <>
      <h1>01 Fetch API</h1>
      {isLoading && <p>로딩중...</p>}
      {error && <p>{ error.message }</p>}
      { data &&       
        <>        
          <h2>{data.title}</h2>
          <p>{data.content}</p>
          <CommentList />
        </>
      }
    </>
  );
}

export default BoardInfo;