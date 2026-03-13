import { useEffect, useState } from "react";
import { blogs, pages_interface } from "../utils/interfaces";
import { get } from "../utils/api";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router";

export default function Blogs(props: pages_interface) {
  const [_blogs, setBlogs] = useState<null | blogs[]>([]);

  useEffect(() => {
    (async () => {
      const response = await get("blog");
      if (response.error) {
        setBlogs(null);
        alert(response.error);
        return;
      }
      setBlogs(response.data);
    })();
  }, []);

  return (
    <div
      id={props.id}
      className={`${props.className} flex flex-col w-full h-full p-2 overflow-hidden`}
    >
      <div
        className={
          !_blogs || _blogs.length === 0
            ? "flex flex-col h-full w-full justify-center items-center"
            : "flex flex-row flex-wrap w-full h-full overflow-y-scroll gap-2 justify-evenly"
        }
      >
        {_blogs && _blogs.length > 0 ? (
          _blogs.map((blog: blogs) => {
            return (
              <Link
                to={`blog/${blog.id}`}
                className="w-full md:w-2/7 aspect-video"
              >
                <div className="flex flex-col bg-[#e0e0e0] text-black dark:bg-slate-900 dark:border dark:border-slate-500 dark:border-solid dark:text-white p-4 rounded-lg w-full h-full overflow-hidden gap-1">
                  <h1 className="text-[1rem]">{blog.title}</h1>
                  <div className="flex w-full gap-2">
                    {blog.tags.length > 0 ? (
                      blog.tags.map((tag) => {
                        return (
                          <span className="bg-slate-100 text-black rounded px-2 text-[0.75rem]">
                            {tag.replace(/_/gi, " ")}
                          </span>
                        );
                      })
                    ) : (
                      <span className="bg-slate-100 text-black rounded px-2">
                        No Tag Attached
                      </span>
                    )}
                  </div>
                  <ReactMarkdown>{blog.content}</ReactMarkdown>
                  <div className="flex flex-col text-sm font-serif items-end">
                    Posted: {blog.time}
                  </div>
                </div>
              </Link>
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
