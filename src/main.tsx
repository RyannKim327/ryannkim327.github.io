import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app.tsx'
import { HashRouter, Route, Routes } from 'react-router'
import Admin from './admin.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="" element={<App />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
