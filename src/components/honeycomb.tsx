import Hexagon from "./hexagon";

interface _props {
  className: string;
}

function HoneyComb(props: _props) {
  return (
    <div className={`flex ${props.className}`}>
      <Hexagon className="relative top-20" src="ai-haibara.png">
        AI Haibara
      </Hexagon>
      <Hexagon className="relative left-[-2rem]" src="aria-bot.png">
        Aria Bot
      </Hexagon>
      <Hexagon
        className="relative top-20 left-[-4rem]"
        src="baybayin-keyboard.png"
      >
        Baybayin Keyboard
      </Hexagon>
      <Hexagon className="relative top-40 left-[-22rem] mt-2" src="chatapp.png">
        Chat Application
      </Hexagon>
      <Hexagon
        className="relative top-60 left-[-24rem] mt-2"
        src="web-samples.png"
      >
        Web Sample
      </Hexagon>
    </div>
  );
}

export default HoneyComb;
