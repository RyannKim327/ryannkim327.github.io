import { useEffect, useState } from "react";
import { blogs } from "../../utils/interfaces";
import { get } from "../../utils/api";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Blogs() {
  const [blogList, setBlogs] = useState<blogs[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const blog = await get("blog", {
        limit: 20,
      });
      if (blog.error) {
        toast(blog.error);
        return;
      }
      setBlogs(blog.data);
    })();
  }, []);

  return (
    <div className="flex flex-col text-black dark:bg-slate-950 bg-[#f9fafb] dark:text-white w-dvw h-dvh select-none">
      <div className="flex w-full justify-between items-center gap-3 border-b border-b-black dark:border-b-white border-b-solid px-3 pb-5">
        <div
          onClick={() => navigate("/")}
          className="flex w-full items-center gap-2 cursor-pointer"
        >
          <FontAwesomeIcon icon={faLongArrowLeft} />
          <h1 className="text-[1.5rem] underline">Blog lists</h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 overflow-y-auto">
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
      <ToastContainer />
    </div>
  );
}
