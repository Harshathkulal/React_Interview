import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import App2 from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <App2/>
  </StrictMode>,
)
