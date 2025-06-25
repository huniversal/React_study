import useAxiosInstance from '@/hooks/useAxiosInstance';
import { useState } from 'react';

interface CommentNewProps {
  onAddComment: () => void;
}

function CommentNew({onAddComment} : CommentNewProps) {
  // 댓글 내용 저장
  const [content, setContent] = useState('');

  const axios = useAxiosInstance();

  // API 서버에 댓글 등록 요청
  const requestAddComment = async (formData: FormData) => {
    try {
      const response = await axios.post('/posts/1/replies', formData);
      onAddComment();

      // TODO : 댓글 등록 후 목록 갱신(requsetCommentList() 호출)
    } catch(err) {
    } 
  };

  const handleAddComment = ((e: React.FormEvent<HTMLFormElement>) => {
    // TOOD 중복 요청 방지(요청 시작 전에 버튼 비활성화, 응답 완료 후에 버튼 활성화)
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log('content', content);
    // formData.append('content', content);
    requestAddComment(formData);
  })
  return (
    <>
      <h4>댓글 등록</h4>
      <form onSubmit={ handleAddComment}>
        <textarea 
          name='content'
          value={content} 
          onChange={(e) => setContent(e.target.value)}
          rows={3} 
          cols={30} 
          placeholder="댓글 내용" 
        /><br />
        <button type="submit">등록</button>
      </form>
    </>
  );
}

export default CommentNew;