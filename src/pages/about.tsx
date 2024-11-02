import { pages_interface } from "../utils/interfaces";

export default function About(props: pages_interface) {
  return (
    <div id={props.id} className={`${props.className}`}>
      <h1>About</h1>
    </div>
  );
}
