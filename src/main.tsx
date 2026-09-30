import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app.tsx'
import { HashRouter, Route, Routes } from 'react-router'
import Admin from './admin.tsx'
import AdminDashboard from '@/routes/admin/index.tsx'
import AdminExperiences from '@/routes/admin/experiences.tsx'
import UserProject from './routes/users/projects.tsx'
import UserCertifications from './routes/users/certificates.tsx'
import EditBlog from './routes/admin/edit-blog.tsx'
import Blogs from './routes/users/blogs.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="w-dvw h-dvh bg-bg text-fg">
      <HashRouter>
        <Routes>
          <Route path="" element={<App />} />
          <Route path="/admin/" element={<Admin />}>
            <Route path="" element={<AdminDashboard />} />
            <Route path="experiences" element={<AdminExperiences />} />
            <Route path="edit-blog/:id" element={<EditBlog />} />
          </Route>
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<UserProject />} />
          <Route path="/certificates" element={<UserCertifications />} />
        </Routes>
      </HashRouter>
    </div>
  </StrictMode>,
)
