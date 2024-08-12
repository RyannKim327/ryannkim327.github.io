import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Me from "./../assets/img/profile.jpg";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";

const goto = (url: string) => {
  if (url) {
    const w = window.open(url, "_black");
    if (w) {
      w.focus();
    }
  }
};

const li = (icon: IconProp, info: string, url: string) => {
  const styles = {
    boxShadow:
      "3px 3px 5px #333333, 3px 3px 5px inset rgba(255, 255, 255, 0.1)",
  };
  return (
    <li
      onClick={() => {
        goto(url);
      }}
      className={`flex items-center my-2 justify-start font-bold text-gray-300 hover:text-white ${url !== "" ? "cursor-pointer" : ""}`}
    >
      <FontAwesomeIcon
        className="text-2xl rounded-md aspect-square p-2 box-border"
        style={styles}
        icon={icon ?? ""}
      />
      <span className="mx-2">{info ?? ""}</span>
    </li>
  );
};

const Left = () => {
  return (
    <div className="left flex flex-col items-center m-3 p-3 rounded-[5px] custom-shadow rounded">
      <img
        src={Me}
        className="aspect-square w-5/12 mt-10 rounded-md mb-6"
        alt="Ryann Kim Sesgundo"
      />
      <h1 className="text-2xl font-bold spartan">Ryann Kim Sesgundo</h1>
      <h3 className="courier-prime bg-[rgba(255,255,255,0.1)] px-2 rounded-md">
        A newbie developer
      </h3>
      <ul className="mt-10">
        {li(faEnvelope, "weryses19@gmail.com", "")}
        {li(faPhone, "0985 *** 7231", "")}
        {li(faLocationDot, "Lucena City", "")}
        {li(faFacebook, "@MPOP.ph", "https://facebook.com/MPOP.ph")}
        {li(faGithub, "@RyannKim327", "https://github.com/RyannKim328")}
      </ul>
    </div>
  );
};

export default Left;
