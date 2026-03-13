import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router";
import { blogs } from "../../utils/interfaces";
import { useEffect, useState } from "react";
import { get, retrieval } from "../../utils/api";
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
        <div className="flex flex-col text-black dark:bg-slate-950 bg-[#f9fafb] dark:text-white w-dvw h-dvh select-none">
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
                      {tag.replace(/_/gi, " ")}
                    </span>
                  );
                })}
              </div>
              <span className="text-sm">Posted: {blog?.time}</span>
            </div>
            <div className="flex flex-col p-2 py-5 overflow-y-auto h-full w-full">
              <div className="">
                <ReactMarkdown
                  components={{
                    ul: ({ node, ...props }) => (
                      <ul className="list-disc list-inside ml-5" {...props} />
                    ),
                    ol: ({ node, ...props }) => (
                      <ol
                        className="list-decimal list-inside ml-5"
                        {...props}
                      />
                    ),
                    pre: ({ node, ...props }) => (
                      <pre
                        className="select-text bg-zinc-200 shadow shadow-zinc-500 dark:shadow-none dark:bg-slate-900 dark:text-zinc-100 p-4 rounded-lg overflow-x-auto my-4"
                        {...props}
                      />
                    ),

                    code: ({ node, className, children, ...props }) => {
                      return (
                        <code
                          className={`select-text font-mono text-sm bg-zinc-200 dark:bg-slate-900 ${className ?? ""}`}
                          {...props}
                        >
                          {children}
                        </code>
                      );
                    },
                  }}
                >
                  {blog?.content}
                </ReactMarkdown>
              </div>
              {blog?.imgs ? (
                <div className="flex flex-col h-1/5 mt-5">
                  <span className="font-bold">Some Pictures included:</span>
                  <div className="flex h-full">
                    {blog?.imgs.map((img) => {
                      return <img src={retrieval("images", { file: img })} />;
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
              The ID Doesn't exists to my storage
            </span>
            <span className="text-lg">Ryann Kim Sesgundo</span>
          </div>
        </div>
      )}
    </>
  );
}
