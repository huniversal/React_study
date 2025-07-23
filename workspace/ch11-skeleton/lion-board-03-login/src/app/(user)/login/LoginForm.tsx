'use client';

import { login } from "@/data/actions/user";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useActionState, useEffect } from "react";

export default function LoginForm() {
  const router = useRouter();
  const [ userState, formAction, isLoading ] = useActionState(login, null);
  console.log(isLoading, userState);

  const redirect = useSearchParams().get('redirect');

  // setUser는 상태를 변경하는 함수이므로 useEffect에서 호출해야 한다.
  useEffect(() => {
    if(userState?.ok){
      alert('로그인이 완료되었습니다.');
      if(redirect){
        router.replace(redirect); // 돌아갈 페이지가 있을 경우 이동한다.
      }else{
        router.back(); // 이전 페이지로 이동한다.
      }
    }else{
      if(!userState?.errors && userState?.message){ // 입력값 검증에러가 아닌 경우
        alert(userState.message); // 로그인 실패 메세지
      }
    }
  }, [userState]);
  
  return (
    <>
      { redirect && (
        <div className="text-center py-4">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">로그인이 필요한 서비스입니다.</h3>
        </div>
      ) }
      <form action={ formAction }>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="email">이메일</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="이메일을 입력하세요"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
            name="email"
            defaultValue="u1@market.com"
          />
          <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">{ userState?.ok === 0 && userState.errors?.email?.msg }</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder="비밀번호를 입력하세요"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
            name="password"
            defaultValue="11111111"
          />
          <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">{ userState?.ok === 0 && userState.errors?.password?.msg }</p>
          <Link href="#" className="block mt-6 ml-auto text-gray-500 text-sm dark:text-gray-300 hover:underline">비밀번호를 잊으셨나요?</Link>
        </div>
        <div className="mt-10 flex justify-center items-center">
          <button type="submit" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">로그인</button>
          <Link href="/signup" className="ml-8 text-gray-800 hover:underline">회원가입</Link>
        </div>
      </form>
    </>
  )
}