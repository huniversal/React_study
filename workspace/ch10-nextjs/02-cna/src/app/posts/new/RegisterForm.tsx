"use client"
// 그냥 useHook 사용하면 무조건 클라이언트
import { createPost } from "@/data/actions/boardAction";
import { useActionState } from "react";

export default function RegisterForm() {
  const [state, formAction, isPending] = useActionState(createPost, null);

  console.log("isPending state", isPending, state);
  return (
    <form action={formAction}>
      <input type="text" name="title" />
      <input type="text" name="content" />
      <button>등록</button>
    </form>
  );
}