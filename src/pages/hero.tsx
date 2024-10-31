import Word from "../components/wordbyword";

interface properties {
  className: string | undefined;
}

export default function Hero(props: properties) {
  return (
    <div className={props.className}>
      <Word>Hello, I am Ryann Kim Sesgundo</Word>
    </div>
  );
}
