import Hero from "./pages/hero";
import Header from "./parts/header";

function App() {
  return (
    <div className="w-dvw h-dvh">
      <Header />
      <Hero className="flex flex-col items-center justify-center h-dvh w-dvw" />
      <Hero className="flex flex-col items-center justify-center h-dvh w-dvw bg-red-100" />
    </div>
  );
}

export default App;
