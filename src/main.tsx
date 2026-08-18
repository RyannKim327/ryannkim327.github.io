import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app.tsx'
import { HashRouter, Route, Routes } from 'react-router'
import Admin from './admin.tsx'
import AdminDashboard from '@/routes/admin/index.tsx'
import AdminExperiences from '@/routes/admin/experiences.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="" element={<App />} />
        <Route path="/admin/" element={<Admin />}>
          <Route path="" element={<AdminDashboard />} />
          <Route path="experiences" element={<AdminExperiences />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
