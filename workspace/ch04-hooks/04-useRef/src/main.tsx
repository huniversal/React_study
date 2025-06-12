import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
// import AppUser from "./AppUser";
import AppBank from "./AppBank";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <AppBank />
  </StrictMode>,
)
