import './App.css'
import Title from "./components/Title"
import TodoList from "./pages/todo/List"

export interface TodoItem {
  _id: number;
  title: string;
  done: boolean;
}

function App() {
  const list: TodoItem[] = [
    {_id: 1, title: 'React 공부', done: false},
    {_id: 2, title: 'JS 공부', done: true},
    {_id: 3, title: 'TS 공부', done: true}
  ]
  return (
    <div id="app">
      <div>
        <Title />
        <Title titleName="타이틀1" />
        <Title titleName="타이틀2" />
        <TodoList list={ list } />
      </div>
    </div>
  );
}

export default App
