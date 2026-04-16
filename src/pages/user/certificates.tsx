import { useEffect, useState } from "react";
import { certificates } from "../../utils/interfaces";
import { get, retrieval } from "../../utils/api";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Card from "../../components/card";

const isUrl = (url: string) => {
  if (url.startsWith("http")) {
    return url;
  }
  retrieval("retrieve", {
    file: url,
  });
};

export default function Certis() {
  const [certList, setCerts] = useState<certificates[]>([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const certs = await get("certs", {
        limit: 12,
        page: page,
      });
      if (certs.error) {
        toast(certs.error);
        return;
      }
      setPages(certs.pages);
      setCerts(certs.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const certs = await get("certs", {
        limit: 12,
        page: page,
      });
      if (certs.error) {
        toast(certs.error);
        return;
      }
      setCerts(certs.data);
    })();
  }, [page]);

  return (
    <div className="flex flex-col w-full h-full select-none">
      <div className="flex flex-col justify-center w-full gap-3 border-b border-b-black dark:border-b-white border-b-solid px-3 py-2">
        <div className="flex">
          <div
            onClick={() => navigate("/")}
            className="flex w-full items-center gap-2 cursor-pointer"
          >
            <FontAwesomeIcon icon={faLongArrowLeft} />
            <h1 className="text-[1.5rem] underline">Lists of Certifications</h1>
          </div>
        </div>
        <span className="text-sm">Page: {page}</span>
      </div>
      <div className="flex flex-wrap gap-2 overflow-y-auto p-2 pb-15">
        {certList.map((cert) => {
          return (
            <Card className="relative w-full md:w-[calc(33.333%-0.5rem)] aspect-video group rounded">
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
            </Card>
          );
        })}
      </div>
      <div className="flex left-0 right-0 bottom-0 fixed items-center z-10 justify-center p-2">
        <div className="flex justify-center bg-slate-300/50 backdrop-blur-sm px-10 py-1 gap-3 rounded">
          <p
            className={`flex p-1 rounded aspect-square h-8 items-center justify-center cursor-pointer`}
            onClick={() => {
              if (page > 1) {
                setPage((prev) => prev - 1);
              } else {
                setPage(1);
              }
            }}
          >
            Prev
          </p>
          {pages > 1 &&
            Array.from({ length: pages }).map((_, index) => {
              return (
                <p
                  className={`flex ${index === page - 1 ? "bg-slate-950/50 text-white " : ""} p-1 rounded aspect-square h-8 items-center justify-center cursor-pointer`}
                  onClick={() => {
                    setPage(index + 1);
                  }}
                >
                  {index + 1}
                </p>
              );
            })}
          <p
            className={`flex p-1 rounded aspect-square h-8 items-center justify-center cursor-pointer`}
            onClick={() => {
              if (page < pages) {
                setPage((prev) => prev + 1);
              } else {
                setPage(pages);
              }
            }}
          >
            Next
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
