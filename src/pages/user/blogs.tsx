import { useEffect, useState } from "react";
import { blogs } from "../../utils/interfaces";
import { get } from "../../utils/api";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Blogs() {
  const [blogList, setBlogs] = useState<blogs[]>([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const blog = await get("blog", {
        limit: 12,
        page: page,
      });
      if (blog.error) {
        toast(blog.error);
        return;
      }
      setPages(blog.pages);
      setBlogs(blog.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const blog = await get("blog", {
        limit: 12,
        page: page,
      });
      if (blog.error) {
        toast(blog.error);
        return;
      }
      setBlogs(blog.data);
    })();
  }, [page]);

  return (
    <div className="flex flex-col text-black dark:bg-slate-950 bg-[#f9fafb] dark:text-white w-dvw h-dvh select-none">
      <div className="flex flex-col justify-center w-full gap-3 border-b border-b-black dark:border-b-white border-b-solid px-3 py-2">
        <div className="flex">
          <div
            onClick={() => navigate("/")}
            className="flex w-full items-center gap-2 cursor-pointer"
          >
            <FontAwesomeIcon icon={faLongArrowLeft} />
            <h1 className="text-[1.5rem] underline">Blog lists Page</h1>
          </div>
        </div>
        <span className="text-sm">Page: {page}</span>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-2 overflow-y-auto p-2">
        {blogList.map((blog) => {
          return (
            <Link to={`${blog.id}`} className="w-full aspect-video">
              <div className="flex flex-col bg-zinc-200 shadow-sm shadow-black text-black dark:bg-slate-900 dark:border dark:border-slate-500 dark:border-solid dark:text-white p-4 rounded-lg w-full h-full overflow-hidden gap-1">
                <span>{blog.title}</span>
                <span className="overflow-hidden">{blog.content}</span>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex left-0 right-0 bottom-0 fixed items-center justify-center p-2">
        <div className="flex justify-center bg-slate-300 dark:bg-slate-950/50 px-10 py-1 gap-3 rounded">
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
                  className={`flex ${index === page - 1 ? "bg-slate-950 dark:bg-slate-400 text-white dark:text-black" : ""} p-1 rounded aspect-square h-8 items-center justify-center cursor-pointer`}
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
