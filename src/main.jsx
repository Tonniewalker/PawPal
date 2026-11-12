import { createRoot } from 'react-dom/client'
import './sw-registration.js'
import '@fontsource/mali/thai-400.css'
import '@fontsource/mali/latin-400.css'
import '@fontsource/mali/thai-600.css'
import '@fontsource/mali/latin-600.css'
import '@fontsource/mali/thai-700.css'
import '@fontsource/mali/latin-700.css'
import './index.css'
import App from './App.jsx'
// HashRouter สำหรับ GitHub Pages
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>,
)
