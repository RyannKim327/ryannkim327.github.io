import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router";
import PostBlog from "./pages/post/blogs.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog/submit" element={<PostBlog />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
