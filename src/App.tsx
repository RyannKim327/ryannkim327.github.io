import Header from "./parts/header";
<<<<<<< HEAD
import LeftAbout from "./pages/left/about";
import RightAbout from "./pages/right/about";
import LeftIndex from "./pages/left";
import RightIndex from "./pages/right";
import LeftProjects from "./pages/left/projects";
import RightProjects from "./pages/right/projects";
import LeftContact from "./pages/left/contact";
import RightContact from "./pages/right/contact";
=======
import About from "./pages/about";
>>>>>>> a2fd2b84c086778b589ffe0cfa196cb5d592062f

function App() {
  return (
    <div className="flex flex-col p-4 bg-[#232136] text-[#e0def4] w-dvw h-dvh">
      <div className="flex flex-col border border-solid border-[#c4a7e7] h-full w-full overflow-hidden">
        <Header />
<<<<<<< HEAD
        <div className="flex flex-col lg:flex-row h-full w-full">
          <div className="flex flex-col border-solid border-[#c4a7e7] border lg:w-1/3 h-1/3 lg:h-full items-center justify-center p-2 shrink-0">
            <Routes>
              <Route path="" element={<LeftIndex />} />
              <Route path="/about" element={<LeftAbout />} />
              <Route path="/projects" element={<LeftProjects />} />
              <Route path="/contact" element={<LeftContact />} />
            </Routes>
          </div>
          <div className="flex flex-col border-solid border-[#c4a7e7] border lg:w-2/3 lg:h-full items-center justify-center shrink-0">
            <Routes>
              <Route path="" element={<RightIndex />} />
              <Route path="/about" element={<RightAbout />} />
              <Route path="/projects" element={<RightProjects />} />
              <Route path="/contact" element={<RightContact />} />
            </Routes>
          </div>
=======
        <div className="flex flex-col w-full h-full">
          <About />
>>>>>>> a2fd2b84c086778b589ffe0cfa196cb5d592062f
        </div>
      </div>
    </div>
  );
}

export default App;
