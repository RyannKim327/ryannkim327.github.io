import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router";
import { blogs } from "../../utils/interfaces";
import { useEffect, useState } from "react";
import { get, retrieval } from "../../utils/api";
import Markdown from "react-markdown";
import { toast, ToastContainer } from "react-toastify";
import session from "../../utils/session_controller";
import { decoder } from "../../utils/tools";
import SyntaxHighlight from "../../components/syntax_highlight";

export default function GetBlog() {
  const adminKey = session("user") ?? "";
  const { id } = useParams();
  const [blog, setBlog] = useState<null | blogs>();
  const serialKey = decoder([98, 108, 97, 99, 107, 104, 101, 97, 114, 116]);

  useEffect(() => {
    (async () => {
      const response = await get("blog", {
        id: id,
      });
      if (response.error) {
        setBlog(null);
        toast(`There's a problem with the server, please reload the webpage`);
        return;
      }
      const data = response.data;
      setBlog(data);
    })();
  }, [id]);

  return (
    <>
      {blog != null ? (
        <div className="flex flex-col text-black dark:bg-slate-950 bg-[#f9fafb] dark:text-white w-dvw h-dvh select-none">
          <div className="flex flex-col p-4 h-full w-full">
            <div className="flex w-full justify-between items-center gap-3 border-b border-b-black dark:border-b-white border-b-solid px-3 pb-5">
              <div className="flex w-full items-center gap-2">
                <FontAwesomeIcon
                  onClick={() => history.back()}
                  icon={faLongArrowLeft}
                />
                <h1 className="text-[1.5rem] underline">{blog?.title}</h1>
              </div>
              {adminKey === serialKey ? <span className="">Edit</span> : null}
            </div>
            <div className="flex gap-3 items-center justify-between px-5 py-3">
              <div className="flex flex-wrap gap-1">
                {blog?.tags.map((tag) => {
                  return (
                    <span className="bg-slate-200 text-black rounded px-2 text-[0.75rem]">
                      {tag.replace(/_/gi, " ")}
                    </span>
                  );
                })}
              </div>
              <span className="text-sm">Posted: {blog?.time}</span>
            </div>
            <div className="flex flex-col p-2 py-5 overflow-y-auto h-full w-full">
              <div>
                <Markdown
                  components={{
                    ul: ({ ...props }) => (
                      <ul className="list-disc list-inside ml-5" {...props} />
                    ),
                    ol: ({ ...props }) => (
                      <ol
                        className="list-decimal list-inside ml-5"
                        {...props}
                      />
                    ),

                    code: SyntaxHighlight,
                  }}
                >
                  {blog?.content}
                </Markdown>
              </div>
              {blog?.imgs ? (
                <div className="flex flex-col h-1/5 mt-5">
                  <span className="font-bold">Some Pictures included:</span>
                  <div className="flex h-full">
                    {blog?.imgs.map((img) => {
                      return <img src={retrieval("retrieve", { file: img })} />;
                    })}
                  </div>
                </div>
              ) : null}
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
              Please wait for a moment, the page is still loading
            </span>
            <span className="text-lg">Ryann Kim Sesgundo</span>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
}
