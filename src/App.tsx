import { Route, Routes } from "react-router";
import About from "./pages/about";
import Contact from "./pages/contacts";
import Hero from "./pages/hero";
import Projects from "./pages/projects";
import Header from "./parts/header";
import LeftAbout from "./pages/left/about";
import RightAbout from "./pages/right/about";
import LeftIndex from "./pages/left";
import RightIndex from "./pages/right";

function App() {
  return (
    <div className="flex flex-col p-4 bg-[#232136] text-[#e0def4] w-dvw h-dvh">
      <div className="flex flex-col border-1 border-solid border-[#c4a7e7] p-2 h-full w-full overflow-hidden">
        <Header />
        <div className="flex flex-col lg:flex-row h-full w-full gap-2">
          <div className="flex flex-col border-solid border-[#c4a7e7] border-1 lg:w-1/2 h-1/3 lg:h-full items-center justify-center sshrink-0">
            <Routes>
              <Route path="" element={<LeftIndex />} />
              <Route path="/about" element={<LeftAbout />} />
            </Routes>
          </div>
          <div className="flex flex-col border-solid border-[#c4a7e7] border-1 lg:w-1/2 lg:h-full items-center justify-center shrink-0">
            <Routes>
              <Route path="" element={<RightIndex />} />
              <Route path="/about" element={<RightAbout />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
