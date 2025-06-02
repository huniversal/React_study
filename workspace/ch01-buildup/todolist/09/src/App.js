import Todo from "./pages/Todo.js";
// import TodoInput from "./pages/TodoInput.js";
// import TodoItem from "./pages/TodoItem.js";
// import TodoList from "./pages/TodoList.js";
import Reaction from "./reaction.js";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"

function App(){
  // 샘플 목록
  const initItemList = [
    { num: 1, title: '자바스크립트 공부', done: true },
    { num: 2, title: 'JS 프로젝트', done: true },
    { num: 3, title: 'React 공부', done: false },
  ];
  const [itemList, setItemList] = Reaction.useState(initItemList);
  let lastNum = itemList.length;
  
// 할일 추가
function addItem(title){
  console.log('할일 추가');
  const item = { num: itemList[itemList.length-1]?.num + 1 || 1, title, done: false };
  setItemList([ ...itemList, item ]);
}
  function toggleDone(num) {
    const newItemList = itemList.map(item =>
      item.num === num
        ? { ...item, done: !item.done }
        : item
    );
      // ✅ 주소 비교용 로그
    console.log('원본 itemList[0]:', itemList[0]);
    console.log('새로운 newItemList[0]:', newItemList[0]);
    console.log('주소 비교:', itemList[0] === newItemList[0]);
    setItemList(newItemList);
  }
  // 할일 삭제
  function deleteItem(num) {
    console.log(num, '할일 삭제');
    const newItemList = itemList.filter(item => item.num !== num);
    setItemList(newItemList); // 상태 변경 → 자동 리렌더링
  }

  return (
    Reaction.createElement('div', { id: 'todo' }, 
      Header(),
      Todo({ itemList, addItem, toggleDone, deleteItem }),
      Footer()
    )
  );
}

export default App;