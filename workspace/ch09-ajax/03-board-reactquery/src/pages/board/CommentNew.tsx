import useAxiosInstance from "@/hooks/useAxiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

function CommentNew() {
  // 댓글 내용 저장
  const [content, setContent] = useState("");

  // axios instance
  const axios = useAxiosInstance();

  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (formData: FormData) =>
      axios.post("/posts/1/replies", formData),
    onSuccess() {
      // onSuccess: 쿼리 성공 시 실행되는 함수. 매개변수로 서버의 응답값이 전달됨
      setContent('');
      // TODO 댓글 등록 후 댓글 목록 갱신(requestCommentList()를 props로 전달받아서 호출)
      queryClient.invalidateQueries({ queryKey: ["posts", 1, "replies"] });
      // invalidateQueries : useQuery에서 사용된 queryKey를 지정해서 해당 쿼리를 무효화 시키고 데이터를 다시 가져옴
    },
  });


  const handleAddComment = (event: React.FormEvent<HTMLFormElement>) => {
    // TODO 중복 요청 방지(요청 시작 전에 버튼 비활성화, 응답 완료 후에 버튼 활성화)
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // e.target.currentTarget은 submit 이벤트가 발생한 form 요소
    // 그걸 new FormData()에 넣으면
    // 그 form 안에 있는 모든 input, textarea, select 요소들의 값을 자동으로 수집해서 FormData 객체를 만듦
    mutate(formData);
  };

  return (
    <>
      <h4>댓글 등록</h4>
      <form onSubmit={handleAddComment}>
        <textarea
          name="content"
          rows={3}
          cols={30}
          placeholder="댓글 내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <button type="submit" disabled={isPending}>등록</button>
      </form>
    </>
  );
}

export default CommentNew;