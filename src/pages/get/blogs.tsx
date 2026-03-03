import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router";

export default function GetBlog() {
  const { id } = useParams();

  return (
    <div className="flex flex-col p-4 bg-[#f6f6f6] text-black dark:bg-[#0c0c0c] dark:text-white w-dvw h-dvh">
      <div className="flex flex-col border border-solid border-[#0c0c0c] dark:border-[#f9f9f6] h-full w-full overflow-hidden pt-6 px-6">
        <div className="flex w-full items-center gap-3">
          <FontAwesomeIcon icon={faLongArrowLeft} />
          <h1 className="text-[1.5rem] underline">Test Title {id}</h1>
          <div className="flex gap-1">
            <span className="bg-slate-200 text-black rounded px-2 text-[0.75rem]">
              Test
            </span>
            <span className="bg-slate-200 text-black rounded px-2 text-[0.75rem]">
              Test Category
            </span>
          </div>
        </div>
        <blockquote className="text-[1rem] p-2">test</blockquote>
      </div>
    </div>
  );
}
