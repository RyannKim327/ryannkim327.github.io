import Header from "./parts/header";

import About from "./pages/about";
import Hero from "./pages/hero";

function App() {
  return (
    <div className="flex flex-col p-4 bg-[#232136] text-[#e0def4] w-dvw h-dvh">
      <div className="flex flex-col border border-solid border-[#c4a7e7] h-full w-full overflow-hidden">
        <Header />
        <div className="flex flex-col w-full h-full overflow-y-scroll">
          <Hero id="hero" />
          <About id="about" />
        </div>
      </div>
    </div>
  );
}

export default App;
