import { useEffect, useState } from "react";
import { certificates, pages_interface } from "../utils/interfaces";
import { get, retrieval } from "../utils/api";
import { toast, ToastContainer } from "react-toastify";

const isUrl = (url: string) => {
  if (url.startsWith("http")) {
    return url;
  }
  retrieval("images", {
    file: url,
  });
};

export default function Certificates(props: pages_interface) {
  const [certs, setCerts] = useState<certificates[]>([]);

  useEffect(() => {
    (async () => {
      const data = await get("certs");
      if (data.data) {
        setCerts(data.data);
      } else {
        toast("Something went wrong");
      }
    })();
  }, []);

  return (
    <div
      id={props.id}
      className={`${props.className} flex flex-col overflow-hidden overflow-y-scroll w-full h-full`}
    >
      <div className="flex flex-col md:flex-row md:flex-wrap w-full p-2 gap-2">
        {certs.map((cert: certificates) => {
          return (
            <div className="flex flex-col relative w-full md:w-[calc(33.333%-0.5rem)] aspect-video group rounded overflow-hidden">
              <img
                className="absolute w-full h-full"
                src={isUrl(cert.url)}
                alt={cert.source}
              />
              <div className="flex flex-col absolute z-1 md:opacity-0 group-hover:opacity-100 transition-opacity justify-end h-full w-full">
                <span className="flex justify-between w-full bg-black/50 text-white py-2 px-2">
                  <span>{cert.source}</span>
                  <span>[{cert.category}]</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <ToastContainer />
    </div>
  );
}
