import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import AppIn from "./AppIn";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <AppIn />
  </StrictMode>,
)
