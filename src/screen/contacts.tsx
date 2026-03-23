import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pages_interface } from "../utils/interfaces";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faNpm,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { ChangeEvent, FormEvent, ReactNode, useState } from "react";
import { faVcard } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import Input from "../widgets/input";
import { post } from "../utils/api";

interface linking_interface {
  icon: IconDefinition;
  url: string;
  children: string | ReactNode;
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

export default function Contact(props: pages_interface) {
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    content: "",
  });

  const sendContact = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const fields = [];
    const email = formData.email.trim();
    const name = formData.name.trim();
    const content = formData.content.trim();

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      fields.push("email");
    }
    if (name.length <= 10) {
      fields.push("name");
    }
    if (content.length <= 10) {
      fields.push("content");
    }
    if (fields.length > 0) {
      toast(`Please fillup the following fields: ${fields.join(", ")}`);
    } else {
      const send = await post("contact/submit", {
        name,
        email,
        content,
      });
      if (send.error) {
        toast(send.error);
      } else {
        setFormData({
          email: "",
          name: "",
          content: "",
        });
        toast("Message Sent to the Developer");
      }
    }
  };

  return (
    <div
      id={props.id}
      className={`flex flex-col ${props.className} p-2 xl:py-4 gap-10 h-full w-full justify-between`}
    >
      <iframe
        src="https://www.google.com/maps/embed/v1/place?q=Ibabang+Iyam&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        title="Location"
        loading="lazy"
        allowFullScreen={false}
        className="h-3/4 w-full dark:grayscale dark:invert transition ease-in delay-100"
      />
      <form
        onSubmit={sendContact}
        // action="https://formsubmit.co/weryses19@gmail.com"
        // method="POST"
        className="flex flex-col w-full h-full box-border gap-2"
      >
        <div className="flex flex-row gap-2 w-full box-border">
          <Input
            // className={`w-full rounded border-black dark:border-white`}
            type="text"
            value={formData}
            onChange={setFormData}
            name="name"
            minLength={10}
            placeholder="Name/Company name"
          >
            Name
          </Input>
          <Input
            // className={`w-full rounded border-black dark:border-white`}
            value={formData}
            onChange={setFormData}
            name="email"
            type="email"
            minLength={10}
            placeholder="Email Address"
          >
            Email
          </Input>
        </div>
        <textarea
          style={{
            borderWidth: "1px",
            borderStyle: "solid",
          }}
          placeholder="Enter your message"
          minLength={20}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            setFormData((prev) => ({
              ...prev,
              content: e.target.value,
            }));
          }}
          value={formData.content}
          required
          className="resize-none p-2 outline-none rounded h-full bg-transparent border-black dark:border-white "
        ></textarea>
        <div className="flex justify-between px-4">
          <div className="flex box-border pl-4 gap-5">
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
          {sending ? null : (
            <input
              style={{ borderWidth: "1px", borderStyle: "solid" }}
              className="rounded px-2 border-black dark:border-white"
              type="submit"
              value="Send email"
            />
          )}
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
