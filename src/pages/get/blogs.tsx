import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router";
import { blogs } from "../../utils/interfaces";
import { useEffect, useState } from "react";
import { get } from "../../utils/api";
import ReactMarkdown from "react-markdown";
import Header from "../../parts/header";

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
    <div className="flex flex-col text-black dark:bg-slate-950 bg-[#f9fafb] dark:text-white w-dvw h-dvh">
      {/* <Header /> */}
      <div className="flex flex-col p-4">
        <div className="flex w-full items-center gap-3">
          <FontAwesomeIcon icon={faLongArrowLeft} />
          <h1 className="text-[1.5rem] underline">{blog?.title}</h1>
          <div className="flex gap-1">
            {blog?.tags.map((tag) => {
              return (
                <span className="bg-slate-200 text-black rounded px-2 text-[0.75rem]">
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
        <div className="p-2 py-5">
          <ReactMarkdown>{blog?.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
