import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router";
import PostBlog from "./pages/admin/blogs.tsx";
import GetBlog from "./pages/user/blog.tsx";
import UploadImage from "./pages/admin/upload.tsx";
import Experiences from "./pages/admin/experiences.tsx";
import Admin from "./pages/index.tsx";
import Projects from "./pages/admin/index.tsx";
import { admin } from "./utils/tools";
import Certificates from "./pages/admin/certifications.tsx";
import Poetry from "./pages/admin/poem.tsx";
import EditBlog from "./pages/admin/edit-blogs.tsx";
import Contact from "./pages/admin/contact.tsx";
import Blogs from "./pages/user/blogs.tsx";
import Certis from "./pages/user/certificates.tsx";
import Coat from "./middleware/coat-control.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Coat>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/blog/:id" element={<GetBlog />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/certificates" element={<Certis />} />
          <Route path={`/${admin}/*`} element={<Admin />}>
            <Route path="" element={<Projects />} />
            <Route path="exp" element={<Experiences />} />
            <Route path="blog" element={<PostBlog />} />
            <Route path="certificate" element={<Certificates />} />
            <Route path="contact" element={<Contact />} />
            <Route path="poem" element={<Poetry />} />
            <Route path="upload" element={<UploadImage />} />
            <Route path="blog/:id/edit" element={<EditBlog />} />
          </Route>
        </Routes>
      </HashRouter>
    </Coat>
  </StrictMode>,
);
