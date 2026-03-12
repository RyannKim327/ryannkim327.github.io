import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router";
import PostBlog from "./pages/admin/blogs.tsx";
import GetBlog from "./pages/user/blogs.tsx";
import UploadImage from "./pages/admin/upload.tsx";
import Experiences from "./pages/admin/experiences.tsx";
import Admin from "./pages/index.tsx";
import Dashboard from "./pages/admin/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin/*" element={<Admin />}>
          <Route path="" element={<Dashboard />} />
          <Route path="exp" element={<Experiences />} />
          <Route path="blog" element={<PostBlog />} />
          <Route path="upload" element={<UploadImage />} />
        </Route>
        <Route path="/blog/:id" element={<GetBlog />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
