import Reaction from "../reaction.js";

function Header() {
  console.log("\tHeader 함수 호출됨");

  return Reaction.createElement(
    "header",
    { class: "header" },
    Reaction.createElement("h1", null, "Counter - 08 컴포넌트를 모듈로 분리"),
    Reaction.createElement("p", null, "파일 경로: ", Reaction.createElement("span", { id: "filepath" }, `ch${document.URL.split("/ch")[1]}index.html`))
  );
}

export default Header;