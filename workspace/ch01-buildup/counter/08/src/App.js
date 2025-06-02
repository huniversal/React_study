import Counter from "./components/Counter.js";
import Header from "./components/Header.js";
import Reaction from "./reaction.js"

function App() {
  return Reaction.createElement("div", { id: "app" }, Header, Counter);
}

export default App;