import Reaction from "../reaction.js"

function Counter() {
  // 구조분해할당으로 배열의 첫번째, 두번쨰 요소를 각각 받음
  const [count, setCount] = Reaction.useState(0);
  // [ 현재값, 변경함수 ] = 초기값
  // 카운터 감소
  const handleDown = () => {
    // 데이터 갱신, count 값 감소
    setCount(count - 1);  // 상태 변경 -> 리렌더링 트리거
  };
  // 카운터 증가
  const handleUp = () => {
    // 데이터 갱신, count 값 증가
    setCount(count + 1);
  };
  // 카운터 초기화
  const handleReset = (event) => {
    // 데이터 갱신, count 값 초기화
    setCount(0);
  };
  return Reaction.createElement(
    "div",
    { id: "counter" },
    Reaction.createElement("button", { type: "button", onclick: handleDown }, "-"),
    Reaction.createElement("button", { type: "button", onclick: (event) => handleReset(event) }, 0),
    Reaction.createElement("button", { type: "button", onclick: handleUp }, "+"),
    Reaction.createElement("span", null, count)
  );
}
export default Counter;