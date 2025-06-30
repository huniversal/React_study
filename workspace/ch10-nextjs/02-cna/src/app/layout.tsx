import './globals.css';
import Link from"next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode // 타입 정의
}) {
  return (
    // Root 레이아웃은 반드시 html, body를 반드시 포함해야 함
    <html lang="ko">
      <body className="flex flex-col h-screen">
        <header className="bg-blue-500 text-white p-4">
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className={`hover:underline`}>Home</Link></li>
              <li><a href="/about" className={`hover:underline`}>About</a></li>
              <li><a href="/posts" className={`hover:underline`}>게시판</a></li>
              <li><a href="/user/login" className={`hover:underline`}>로그인</a></li>
              <li><a href="/user/signup" className={`hover:underline`}>회원가입</a></li>
            </ul>
          </nav>
        </header>
        {/* 해당 자리에 자식 컴포넌트가 들어감 */}
        { children }  
        
      </body>
    </html>
  );
}