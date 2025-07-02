import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About 페이지입니다.", // 검섹엔진 최적화를 위해 사용
};

export default function AboutPage() {
  if (Math.random() > 0.5) {
    throw new Error("About 페이지에서 강제로 에러 발생시킴");
  }
  return <h1>About</h1>;
}