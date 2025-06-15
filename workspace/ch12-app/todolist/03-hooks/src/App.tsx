import Footer from '@components/Footer';
import Header from '@components/Header';
import TodoContainer from '@pages/TodoContainer';

/*
  3번 예제 할일
  1. todoReducer 완성하기
  2. TodoItem의 ID가 고유하도록 수정하기(삭제된 TodoItem과도 ID가 겹치면 안됨, useRef)
  3. Input에 포커스되게 구현하기(useRef)
*/

function App(){
  console.log('App 렌더링');
  return (
    <div id="todo">
      <Header />
      <TodoContainer />
      <Footer />
    </div>
  );
}

export default App
