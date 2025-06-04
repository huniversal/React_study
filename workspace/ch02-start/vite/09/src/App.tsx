import './App.css'
import Title from "./components/Title"
import TodoList from "./pages/todo/List"

function App() {
  return (
    <div id="app">
      <div>
        <Title />
        <Title titleName="타이틀1" />
        <Title titleName="타이틀2" />
        <TodoList />
      </div>
    </div>
  );
}

export default App
