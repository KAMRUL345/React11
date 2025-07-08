import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hello from './components/hello.jsx'
import FullName from './components/FullName.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Hello name="World" />
    <Hello name="Kamrul" />
    <Hello name="Bangladesh" />
    <Hello name="Agrani Bank PLC" />
    <FullName name1="Kamrul" name2="Hasan" />
    <FullName name1="Masrura" name2="Borsha" />

  </StrictMode>,
)
