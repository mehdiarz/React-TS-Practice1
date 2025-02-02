import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


// @ts-ignore
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h2>hello world!</h2>
  </StrictMode>,
)
