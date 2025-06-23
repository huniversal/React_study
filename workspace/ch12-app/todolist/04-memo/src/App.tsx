import Header from '@components/Header';
import TodoContainer from '@pages/TodoContainer';

function App(){
  console.log('App 렌더링');
  return (
    <div id="todo">
      <Header />
      <TodoContainer />
    </div>
  );
}

export default App
