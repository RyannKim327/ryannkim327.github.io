import { useEffect, useState } from "react";
import { blogs, pages_interface } from "../utils/interfaces";
import { get } from "../utils/api";
import { Link } from "react-router";

export default function Blogs(props: pages_interface) {
  const [_blogs, setBlogs] = useState<null | blogs[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await get("blog");
      if (response.error) {
        setBlogs(null);
        alert("Reloading...");
        loadData();
        return;
      }
      setBlogs(response.data);
    };
    loadData();
  }, []);

  return (
    <div
      id={props.id}
      className={`${props.className} flex flex-col w-full h-full p-3 md:p-10 overflow-hidden`}
    >
      <div
        className={
          !_blogs || _blogs.length === 0
            ? "flex flex-col h-full w-full justify-center items-center overflow-y-scroll"
            : "flex flex-row flex-wrap w-full gap-2 justify-evenly overflow-y-auto"
        }
      >
        {_blogs && _blogs.length > 0 ? (
          _blogs.map((blog: blogs) => {
            return (
              <Link
                to={`blog/${blog.id}`}
                className="w-full md:w-[calc(25%-0.5rem)] aspect-video"
              >
                <div className="flex flex-col bg-zinc-200 shadow-sm shadow-black text-black dark:bg-slate-900 dark:border dark:border-slate-500 dark:border-solid dark:text-white p-4 rounded-lg w-full h-full overflow-hidden gap-1">
                  <h1 className="text-[1rem] text-nowrap text-ellipsis">
                    {blog.title}
                  </h1>
                  <div className="flex w-full gap-2">
                    {blog.tags.length > 0 ? (
                      blog.tags.map((tag, i) => {
                        if (i < 3) {
                          return (
                            <span className="bg-zinc-50 text-black rounded px-2 text-[0.75rem] text-nowrap">
                              {tag.replace(/_/gi, " ")}
                            </span>
                          );
                        }
                        return null;
                      })
                    ) : (
                      <span className="bg-slate-100 text-black rounded px-2">
                        No Tag Attached
                      </span>
                    )}
                  </div>
                  <div className="text-[0.75rem]">{blog.content}</div>
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
        <Link
          to={`blog`}
          className="w-full md:w-[calc(25%-0.5rem)] aspect-video"
        >
          <div className="flex flex-col bg-zinc-200 items-center justify-center text-center shadow-sm shadow-black text-black dark:bg-slate-900 dark:border dark:border-slate-500 dark:border-solid dark:text-white p-4 rounded-lg w-full h-full overflow-hidden gap-1">
            <h1 className="text-[1.5rem]">See More</h1>
            <span>For more blogs posted, kindly click this card.</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
