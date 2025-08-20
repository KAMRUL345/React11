import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hello from './components/hello.jsx'
import FullName from './components/FullName.jsx'
import Hello2 from './components/hello2.jsx'
import Btn from './button/button01.jsx'
import { Router, RouterProvider } from 'react-router-dom'
import router from './routes/routes.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />
    <Hello name="World" />
    <Hello name="Kamrul" />
    <Hello name="Bangladesh" />
    <Hello name="Agrani Bank PLC" />
    <FullName name1="Kamrul" name2="Hasan" />
    <FullName name1="Masrura" name2="Borsha" />
    <Hello2 name="Kamrul" age="30" district="Dhaka" />
    <Hello2 name="Badol" age="50" district="ChapaiNawabganj" />
    <Btn />
    <Btn />

  </StrictMode>,
)
