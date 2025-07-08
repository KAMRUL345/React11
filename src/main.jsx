import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hello from './components/hello.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Hello name="World" />
    <Hello name="Kamrul" />
    <Hello name="Bangladesh" />
    <Hello name="Agrani Bank PLC" />
  </StrictMode>,
)
