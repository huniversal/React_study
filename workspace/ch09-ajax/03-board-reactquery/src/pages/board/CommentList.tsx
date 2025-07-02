import useAxiosInstance from '@/hooks/useAxiosInstance';
import CommentNew from '@/pages/board/CommentNew';
import type { ReplyListResType } from '@/types/BoardTypes';
import { useQuery } from '@tanstack/react-query';

function CommentList() {
  // axios instance
  const axios = useAxiosInstance();

  const { data, isLoading, error } = useQuery({
    // queryKey
    // useQuery에 부여되는 고유한 Key 값(배열)
    queryKey: ['posts', 1, 'replies'],
    // queryFn
    // useQuery가 호출 되었을 때 실행될 함수이며 Promise를 반환해야 함
    queryFn: () =>
      axios.get('posts/1/replies?delay=1000', {
        params: {
          // delay: Math.random() * 6000,
          delay: 1000,
        },
      }),
    // queryFn: async () => await axios.get('posts/1?delay=1000'),
    select: (response: { data: ReplyListResType }) => response.data.item,

    // TODO 작업이 실패하면 자동으로 재시도하기(catch 블럭에서 지정한 횟수만큼 requestCommentList() 호출 => 에러 시 무한반복 방지)
    // TODO 다른탭이나 앱에서 작업 후에 돌아오면 데이터 자동으로 갱신하기
    //      - document visibilitychange : 브라우저의 가시성 변경을 감지
    //      - window에 focus 이벤트로 브라우저 탭의 포커스  변경 감지
    //      - requestCommentList() 호출)
    retry: 3, // 작업이 실패하면 자동으로 재시도하기(default 3)
    refetchOnWindowFocus: true, // 다른탭이나 앱에서 작업 후에 돌아오면 데이터 자동으로 갱신하기(default true)
    staleTime: 1000*20, // 일정 시간동안은 캐시해서 서버 호출 횟수 줄이기(default 0)
    // staleTime은 데이터가 fresh → stale 상태로 변경되는 데 걸리는 시간이다.
    // refetchInterval: 1000*3, // 주기적으로 호출해서 데이터를 자동으로 갱신하기
    /**
      // TODO 일정시간동안은 캐시해서 서버 호출 횟수 줄이기
      // TODO 주기적으로 호출해서 데이터를 자동으로 갱신하기, refetchInterval()
    // */
  });

  const replyList = data?.map((reply) => <li key={reply._id}>{reply.content}</li>);

  let content = null;
  if (isLoading) {
    content = <p>댓글 로딩중...</p>;
  } else if (error) {
    content = <p>{error.message}</p>;
  } else if (data) {
    content = (
      <>
        <ul>{replyList}</ul>
        <CommentNew />
      </>
    );
  }

  return (
    <>
      <h3>댓글 목록</h3>

      {content}
    </>
  );
}

export default CommentList;