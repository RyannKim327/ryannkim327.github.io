import Hexagon from "./components/hexagon";

function App() {

  return (
    <div className="flex flex-col w-dvw h-dvh box-border">
      <h1>Test</h1>
      <Hexagon className="bg-black" src="ai-haibara.png">Ai Haibara</Hexagon>
      <Hexagon src="aria-bot.png">Aria Bot</Hexagon>
    </div>
  )
}

export default App
