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
import Download from './routes/users/download.tsx'
import AdminDownload from './routes/admin/download.tsx'
import AdminBlog from './routes/admin/blog.tsx'
import AdminCertificates from './routes/admin/certificates.tsx'
import AdminProject from './routes/admin/project.tsx'
import AdminUpload from './routes/admin/upload.tsx'
import DownloadLists from './routes/users/download-lists.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="w-dvw h-dvh bg-bg text-fg">
      <HashRouter>
        <Routes>
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<UserProject />} />
          <Route path="/certificates" element={<UserCertifications />} />
          <Route path="/download/" element={<DownloadLists />} />
          <Route path="/download/:id" element={<Download />} />
          <Route path="/admin/" element={<Admin />}>
            <Route path="" element={<AdminDashboard />} />
            <Route path="download" element={<AdminDownload />} />
            <Route path="blog" element={<AdminBlog />} />
            <Route path="certificates" element={<AdminCertificates />} />
            <Route path="project" element={<AdminProject />} />
            <Route path="experiences" element={<AdminExperiences />} />
            <Route path="upload" element={<AdminUpload />} />
            <Route path="edit-blog/:id" element={<EditBlog />} />
          </Route>
          <Route path="" element={<App />} />
        </Routes>
      </HashRouter>
    </div>
  </StrictMode>,
)
