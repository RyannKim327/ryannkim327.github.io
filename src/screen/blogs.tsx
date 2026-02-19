import { useEffect, useState } from "react";
import { blogs, pages_interface } from "../utils/interfaces";
import { get } from "../utils/api";
import markdown from "@wcj/markdown-to-html";

export default function Blogs(props: pages_interface) {
  const [blogs, setBlogs] = useState<null | blogs[]>([]);

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
      className={`${props.className} flex flex-col overflow-hidden w-full h-full`}
    >
      <h1>Blogs</h1>
      <div
        className={`${blogs.length <= 0 ? "flex flex-col h-full w-full justify-center items-center" : "grid grid-cols-2 gap-2"}`}
      >
        {blogs.length > 0 ? (
          blogs.map((blog) => {
            return (
              <div className="flex flex-col bg-[#e0e0e0] text-black dark:bg-[#242526] dark:text-white p-4 rounded-lg box-border w-full">
                <h1 className="text-xl">{blog.title}</h1>
                <div className="flex w-full gap-2">
                  {blog.tags.length > 0 ? (
                    blog.tags.map((tag) => {
                      return (
                        <span className="bg-slate-100 text-black rounded px-2">
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
