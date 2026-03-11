import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router";
import PostBlog from "./pages/post/blogs.tsx";
import GetBlog from "./pages/get/blogs.tsx";
import UploadImage from "./pages/post/upload.tsx";
import Experiences from "./pages/post/experiences.tsx";
import Post from "./pages/post/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/post/*" element={<Post />}>
          <Route path="exp" element={<Experiences />} />
          <Route path="blog" element={<PostBlog />} />
        </Route>
        <Route path="/blog/:id" element={<GetBlog />} />
        <Route path="upload" element={<UploadImage />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
