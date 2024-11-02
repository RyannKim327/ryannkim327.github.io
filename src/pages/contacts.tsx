import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pages_interface } from "../utils/interfaces";
import {
  faFacebook,
  faGithub,
  faNpm,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

interface input_interface {
  placeholder: string;
  type: string;
  minLength: number;
  className: string | unknown;
}

interface linking_interface {
  icon: IconDefinition;
  url: string;
  children: string | unknown;
}

const Linking = (props: linking_interface) => {
  return (
    <a href={props.url} className="cursor-pointer" target="_blank">
      <FontAwesomeIcon icon={props.icon} />
      <label className="pl-2 hidden lg:inline cursor-pointer">
        {props.children}
      </label>
    </a>
  );
};

const Input = (props: input_interface) => {
  return (
    <label className={`${props.className} custom-input`}>
      <input
        type={props.type}
        placeholder=" "
        minLength={props.minLength}
        required
      />
      <span>{props.placeholder}</span>
    </label>
  );
};

export default function Contact(props: pages_interface) {
  return (
    <div id={props.id} className={`${props.className} p-2 gap-10 `}>
      <h1 className="text-base lg:text-2xl">Contact</h1>
      <iframe
        src="https://www.google.com/maps/embed/v1/place?q=Ibabang+Iyam&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        title="Location"
        loading="lazy"
        allowFullScreen={false}
        className="h-1/3 w-full"
      />
      <form className="flex flex-col w-full box-border gap-2">
        <div className="flex flex-row gap-2 w-full box-border">
          <Input
            className={`w-full rounded`}
            type="name"
            minLength={20}
            placeholder="Hello"
          />
          <Input
            className={`w-full rounded`}
            type="email"
            minLength={10}
            placeholder="Email Address"
          />
        </div>
        <textarea
          style={{
            border: "1px black solid",
          }}
          placeholder="Enter your message"
          minLength={20}
          required
          className="resize-none p-2 outline-none rounded h-20"
        ></textarea>
        <div className="flex justify-between">
          <div className="flex box-border gap-5">
            <Linking icon={faGithub} url="https://github.com/RyannKim327">
              RyannKim327
            </Linking>
            <Linking icon={faFacebook} url="https://fb.me/MPOP.ph">
              Hello World
            </Linking>
            <Linking icon={faNpm} url="https://npmjs.com/~ryannkim327">
              RyannKim327
            </Linking>
          </div>
          <input
            style={{ border: "1px black solid" }}
            className="rounded px-2"
            type="submit"
            value="Send email"
          />
        </div>
      </form>
    </div>
  );
}
