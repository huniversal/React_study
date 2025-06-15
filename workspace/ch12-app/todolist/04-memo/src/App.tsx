import Footer from '@components/Footer';
import Header from '@components/Header';
import TodoContainer from '@pages/TodoContainer';

/*
  4번 예제 할일
  4. TodoContainer에서 함수 매번 생성하는 것 막기(useCallback)
  5. TodoItem 컴포넌트 메모이제이션
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
