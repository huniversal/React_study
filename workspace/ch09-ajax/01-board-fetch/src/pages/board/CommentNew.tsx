import { useState } from 'react';

function CommentNew() {
  // 댓글 내용 저장
  const [content, setContent] = useState('');

  // API 서버에 댓글 등록 요청
  const requestAddComment = async (formData: FormData) => {
    try {
      await fetch( "https://fesp-api.koyeb.app/market/posts/1/replies?delay=1000", {
        headers: {
          'Client-ID': 'openmarket',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: formData
      });
    } catch(err) {
      console.error(err);
    } 
  };

  const handleAddComment = ((e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    console.log('content', content);
    formData.append('content', content);
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