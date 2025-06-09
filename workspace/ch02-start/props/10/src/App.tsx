import './App.css'
import Counter from "@components/Counter";
import Header from "@components/Header";

function App() {
  console.log("App 컴포넌트 렌더링");
  return (
    <div id="app">
      <Header />
      <Counter />  
      <Counter />  
    </div>
  )
}

export default App
