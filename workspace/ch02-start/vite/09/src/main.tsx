import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// DOM애서 id가 root인 요소를 가져온다.
// render() : root에다가 React 컴포넌트를 실제로 브라우저에 그려주는 함수
// StrictMode : 개발 모드에서만 작동하며 코드가 안전한지 확인해준다
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
