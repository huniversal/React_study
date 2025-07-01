'use client';

import Link from"next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
    console.log(pathname);
    const pathId = pathname.startsWith('/posts/') ? pathname.split('/')[2] : null;
  return (
    <div className="flex flex-1 overflow-hidden">
      <aside className="w-48 bg-gray-800 text-white p-4 lg:w-64">
        <ul className="space-y-2">
          <li><Link href="/posts" className="block hover:bg-gray-700 p-2 rounded">목록 조회</Link></li>
          <li><Link href="/posts/new" className="block hover:bg-gray-700 p-2 rounded">글쓰기</Link></li>
          <p>현재 게시글 번호 {pathId}</p>
        </ul>
      </aside>
      <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        { children }
      </main>
    </div>
  );
}