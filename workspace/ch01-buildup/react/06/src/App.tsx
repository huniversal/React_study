import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Todo from "./pages/Todo";

function App() {
  return (
      <div id="todo">
        <Header />
        <Todo />
        <Footer />
      </div>
  )
}

export default App
