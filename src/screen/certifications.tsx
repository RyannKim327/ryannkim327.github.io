import { useEffect, useState } from "react";
import { certificates, pages_interface } from "../utils/interfaces";
import { get, retrieval } from "../utils/api";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router";

const isUrl = (url: string) => {
  if (url.startsWith("http")) {
    return url;
  }
  retrieval("retrieve", {
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
      className={`${props.className} flex flex-col overflow-x-hidden w-full`}
    >
      <div className="flex flex-col md:flex-row md:flex-wrap w-full p-2 gap-2">
        {certs.map((cert: certificates) => {
          return (
            <div className="flex flex-col border-taupe-600 border border-solid relative w-full md:w-[calc(50%-0.5rem)] aspect-video group rounded overflow-hidden">
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
        <Link
          to={`certificates`}
          className="w-full md:w-[calc(50%-0.5rem)] aspect-video"
        >
          <div className="flex flex-col bg-taupe-300 text-taupe-900 border-taupe-600 border border-solid items-center justify-center text-center p-4 rounded-lg w-full h-full overflow-hidden gap-1">
            <h1 className="text-[1.5rem] font-bold">See More</h1>
            <span className="font-semibold">For more blogs posted, kindly click this card.</span>
          </div>
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
}
