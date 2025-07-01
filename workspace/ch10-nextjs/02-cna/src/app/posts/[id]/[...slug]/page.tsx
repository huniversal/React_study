export default async function SlugPage({params} : {params: {id: string, slug: string[] } } ) {
  const slugParams = await params;
  console.log(slugParams);
  switch (slugParams.slug[0]) {
    case 'like':
      // 좋아요 목록 출력
    case 'favorite':
      // 츨겨찾기 목록 출력
    
  }
  return (
    <>
      <h1>{ slugParams.slug[0] === 'like' ? '좋아요 목록' : '즐겨찾기 목록' }</h1>
      { slugParams.slug[1] && <h2>{slugParams.slug[1] } 상세 정보 출력</h2> }
    </>
  );
}