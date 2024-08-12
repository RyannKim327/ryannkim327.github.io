import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Me from "./../assets/img/prof.jpg";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faGithub,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const li = (icon: IconProp, info: string) => {
  return (
    <li className="flex items-center justify-start font-bold text-gray-300 hover:text-white">
      <FontAwesomeIcon className="text-xl" icon={icon ?? ""} />
      <span className="mx-2">{info ?? ""}</span>
    </li>
  );
};

const Left = () => {
  return (
    <div className="left flex flex-col items-center m-3 p-3 rounded-[5px] custom-shadow rounded">
      <img
        src={Me}
        className="aspect-square w-5/12 mt-10 rounded mb-6"
        alt="Ryann Kim Sesgundo"
      />
      <h1 className="text-2xl font-bold spartan">Ryann Kim Sesgundo</h1>
      <h3 className="roboto-slab bg-[rgba(255,255,255,0.1)] px-2 rounded-md">
        A newbie developer
      </h3>
      <ul className="mt-10">
        {li(faEnvelope, "weryses19@gmail.com")}
        {li(faPhone, "0985 *** 7231")}
        {li(faFacebook, "@MPOP.ph")}
        {li(faGithub, "@RyannKim327")}
        {li(faStackOverflow, "@RyannKim327")}
      </ul>
    </div>
  );
};

export default Left;
