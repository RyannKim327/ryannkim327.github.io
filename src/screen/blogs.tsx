import { useEffect, useState } from "react";
import { blogs, pages_interface } from "../utils/interfaces";
import { get } from "../utils/api";
import markdown from "@wcj/markdown-to-html";

export default function Blogs(props: pages_interface) {
  const [_blogs, setBlogs] = useState<null | blogs[]>([]);

  useEffect(() => {
    (async () => {
      const response = await get("blog");
      console.log(response);
      if (response.error) {
        setBlogs(null);
        alert(response.error);
        return;
      }
      setBlogs(response.data);
    })();
  }, []);

  const renderMarkdown = (content: string): string => {
    try {
      const html = markdown(content || "");
      return typeof html === "string" ? html : "";
    } catch {
      return content || "";
    }
  };

  return (
    <div
      id={props.id}
      className={`${props.className} flex flex-col overflow-hidden w-full h-full p-2`}
    >
      <div
        className={`${_blogs.length <= 0 ? "flex flex-col h-full w-full justify-center items-center" : "grid grid-cols-2 gap-2"}`}
      >
        {_blogs.length > 0 ? (
          _blogs.map((blog: blogs) => {
            return (
              <div className="flex flex-col bg-[#e0e0e0] text-black dark:bg-slate-900 dark:border dark:border-slate-500 dark:border-solid dark:text-white p-4 rounded-lg box-border w-full h-1/3 overflow-hidden gap-1">
                <h1 className="text-[1rem]">{blog.title}</h1>
                <div className="flex w-full gap-2">
                  {blog.tags.length > 0 ? (
                    blog.tags.map((tag) => {
                      return (
                        <span className="bg-slate-100 text-black rounded px-2 text-[0.75rem]">
                          {tag}
                        </span>
                      );
                    })
                  ) : (
                    <span className="bg-slate-100 text-black rounded px-2">
                      No Tag Attached
                    </span>
                  )}
                </div>
                <blockquote
                  className="text-[0.75rem]"
                  dangerouslySetInnerHTML={{
                    __html: renderMarkdown(
                      blog.content
                        .replace(/</gi, "&lt;")
                        .replace(/>/gi, "&gt;")
                        .replace(/\n/gi, "<br>"),
                    ),
                  }}
                ></blockquote>
                <div className="flex flex-col text-sm font-serif items-end">
                  Posted: {blog.time}
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col items-center bg-[#e0e0e0] text-black dark:bg-[#242526] dark:text-white p-4 rounded-lg box-border w-3/4">
            <h1 className="text-xl">Loading</h1>
            <blockquote>Please Wait</blockquote>
          </div>
        )}
      </div>
    </div>
  );
}
