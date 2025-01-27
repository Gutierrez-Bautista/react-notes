import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // "<StrictMode>" lo que hace es ofrecer ayudas en desarrollo (ver si usamos código obsoleto de React, y ejecutar código de forma auxiliar para ayudar a detectar errores)
  // "<StrictMode>" no debe llegar a producción
  <StrictMode>
    <App />
  </StrictMode>
)
