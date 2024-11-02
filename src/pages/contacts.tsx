import { pages_interface } from "../utils/interfaces";

export default function Contact(props: pages_interface) {
  return (
    <div id={props.id} className={`${props.className}`}>
      <h1>Contact</h1>
    </div>
  );
}
