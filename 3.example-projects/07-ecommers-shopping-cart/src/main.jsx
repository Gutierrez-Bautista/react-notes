import { createRoot } from 'react-dom/client'
import App from './App'
import { FiltersProvider } from './context/filters'
import './index.css'

createRoot(document.getElementById('app')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
