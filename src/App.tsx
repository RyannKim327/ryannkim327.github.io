import Header from "./parts/header";
import About from "./pages/about";

function App() {
  return (
    <div className="flex flex-col p-4 bg-[#232136] text-[#e0def4] w-dvw h-dvh">
      <div className="flex flex-col border-1 border-solid border-[#c4a7e7] p-2 h-full w-full overflow-hidden">
        <Header />
        <div className="flex flex-col w-full h-full">
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;
