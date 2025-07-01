"use client"
import './globals.css';
import Link from"next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode // 타입 정의
}) {

  // 주소창의 path 값 추출
  const pathname = usePathname();
  console.log(pathname);
  const isActive = (path: string) => pathname.startsWith(path) ? 'cs-active' : '';

  return (
    // Root 레이아웃은 반드시 html, body를 반드시 포함해야 함
    <html lang="ko">
      <body className="flex flex-col h-screen">
        <header className="bg-blue-500 text-white p-4">
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className={`hover:underline ${isActive('/')}`}>Home</Link></li>
              <li><Link href="/about" className={`hover:underline ${isActive('/about')}`}>About</Link></li>
              <li><Link href="/posts" className={`hover:underline ${isActive('/posts')}`}>게시판</Link></li>
              <li><Link href="/login" className={`hover:underline ${isActive('/login')}`}>로그인</Link></li>
              <li><Link href="/signup" className={`hover:underline ${isActive('/signup')}`}>회원가입</Link></li>
            </ul>
          </nav>
        </header>
        {/* 해당 자리에 자식 컴포넌트가 들어감 */}
        { children }  
      </body>
    </html>
  );
}