import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router";
import { blogs } from "../../utils/interfaces";
import { useEffect, useState } from "react";
import { get } from "../../utils/api";
import ReactMarkdown from "react-markdown";

export default function GetBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState<null | blogs>();

  useEffect(() => {
    (async () => {
      const response = await get("blog");
      if (response.error) {
        setBlog(null);
        alert(response.error);
        return;
      }
      let data = response.data;
      data = data.find((d: blogs) => d.id == (id ?? 0));
      setBlog(data);
    })();
  }, [id]);

  return (
    <>
      {blog != null ? (
        <div className="flex flex-col text-black dark:bg-slate-950 bg-[#f9fafb] dark:text-white w-dvw h-dvh">
          <div className="flex flex-col p-4 h-full w-full">
            <div className="flex w-full items-center gap-3 border-b border-b-black dark:border-b-white border-b-solid pb-5">
              <FontAwesomeIcon
                onClick={() => history.back()}
                icon={faLongArrowLeft}
              />
              <h1 className="text-[1.5rem] underline">{blog?.title}</h1>
            </div>
            <div className="flex gap-3 items-center justify-between px-5 py-3">
              <div className="flex gap-1">
                {blog?.tags.map((tag) => {
                  return (
                    <span className="bg-slate-200 text-black rounded px-2 text-[0.75rem]">
                      {tag}
                    </span>
                  );
                })}
              </div>
              <span className="text-sm">Posted: {blog?.time}</span>
            </div>
            <div className="p-2 py-5 overflow-y-auto h-full w-full">
              <ReactMarkdown>{blog?.content}</ReactMarkdown>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col text-black dark:bg-slate-950 bg-[#f9fafb] dark:text-white w-dvw h-dvh">
          <div className="p-5">
            <div className="flex w-full items-center gap-3 border-b border-b-black dark:border-b-white border-b-solid pb-5">
              <FontAwesomeIcon
                onClick={() => history.back()}
                icon={faLongArrowLeft}
              />
              <h1 className="text-[1.5rem]">NOTICE</h1>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-full w-full">
            <span className="text-2xl">
              The ID Doesn't exists to my storage
            </span>
            <span className="text-lg">Ryann Kim Sesgundo</span>
          </div>
        </div>
      )}
    </>
  );
}
