import useAxiosInstance from "@/hooks/useAxiosInstance";
import CommentList from "@/pages/board/CommentList";
import { useQuery } from "@tanstack/react-query";
import { Suspense } from 'react';

function BoardInfo() {
  // axios instance
  const axios = useAxiosInstance();

  const { data, isLoading, error } = useQuery({
    queryKey: ['posts', 1],
    queryFn: () => axios.get('/posts/1?delay=1000'),
    select: (response) => response.data.item,
  });

  return (
    <>
      <h1>04 React Query(TanStack Query) 라이브러리 + Suspense</h1>

      { isLoading && <p>로딩중...</p> }
      { error && <p>{ error.message }</p> }
      { data && 
        <>
          <h2>{ data.title }</h2>
          <p>{ data.content }</p>
          <Suspense fallback={<p>댓글 로딩중...</p>}>
            <CommentList />
          </Suspense>
        </>
      }

    </>
  );
}

export default BoardInfo;