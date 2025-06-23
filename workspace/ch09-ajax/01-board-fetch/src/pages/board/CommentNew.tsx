import { useState } from 'react';

function CommentNew() {
  // 댓글 내용 저장
  const [content, setContent] = useState('');

  // API 서버에 댓글 등록 요청
  const requestAddComment = (formData: FormData) => {};

  const handleAddComment = ((e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    requestAddComment(formData);
    

  })
  return (
    <>
      <h4>댓글 등록</h4>
      <form onSubmit={ handleAddComment}>
        <textarea 
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