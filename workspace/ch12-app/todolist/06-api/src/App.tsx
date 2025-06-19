import { RouterProvider } from "react-router";
import router from './pages/routes'
import './App.css'

function App() {
  return (
      <RouterProvider router={ router } />
  );  
}

export default App
