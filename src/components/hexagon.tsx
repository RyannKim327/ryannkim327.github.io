function Hexagon(props: any) {
  const _hex = {
    clipPath: `polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)`,
    backgroundColor: "green",
    backgroundImage: `url('/assets/projects/${props.src}')`,
  };
  return (
    <div
      title={props.description || props.children}
      className={`${props.className} inline-block w-[10rem] aspect-square box-border`}
    >
      <span
        className={`flex flex-col bg-cover bg-center bg-no-repeat grayscale hover:grayscale-0 justify-center items-center w-[10rem] aspect-square border-2 border-black border-solid p-2 transition ease transition-75`}
        style={_hex}
      >
        <span className="bg-[rgba(255,255,255,0.3)] text-center text-sm px-2 rounded-sm backdrop-blur">
          {props.children}
        </span>
      </span>
    </div>
  );
}

export default Hexagon;
