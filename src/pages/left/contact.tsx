import { faFacebook, faGithub, faLinkedin, faNpm, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faVcard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

interface linking_interface {
  icon: IconDefinition;
  url: string;
  children: string | ReactNode;
}

const Linking = (props: linking_interface) => {
  return (
    <a href={props.url} className="cursor-pointer w-full hover:text-[#ea9a97]" target="_blank">
      <FontAwesomeIcon icon={props.icon} />
      <label className="pl-2 hidden lg:inline cursor-pointer">
        {props.children}
      </label>
    </a>
  );
};

export default function LeftContact(){
    return (
        <div>
            <h1 className="text-2xl lg:text-5xl">Contact</h1>
            <h3 className="text-lg lg:text-2xl">Reach me out with these platforms</h3>
            <div className="flex lg:flex-col mt-5">
                <Linking icon={faGithub} url="https://github.com/RyannKim327">
                    RyannKim327
                </Linking>
                <Linking icon={faFacebook} url="https://fb.me/MPOP.2016">
                    MPOP Reverse II
                </Linking>
                <Linking icon={faNpm} url="https://npmjs.com/~ryannkim327">
                    RyannKim327
                </Linking>
                <Linking
                    icon={faLinkedin}
                    url="https://linkedin.com/in/ryannkim327"
                >
                    RyannKim327
                </Linking>
                <Linking icon={faVcard} url="/RyannKim327-VCard">
                    Vcard
                </Linking>
            </div>
        </div>
    )
}