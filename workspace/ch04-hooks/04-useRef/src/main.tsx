import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import AppUser from "./AppUser";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <AppUser />
  </StrictMode>,
)
