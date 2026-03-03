import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router";
import PostBlog from "./pages/post/blogs.tsx";
import GetBlog from "./pages/get/blogs.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/post/blog" element={<PostBlog />} />
        <Route path="/blog/:id" element={<GetBlog />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
