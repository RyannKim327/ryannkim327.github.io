import { useEffect, useState } from "react";
import { feedback, pages_interface } from "../utils/interfaces";
import { get } from "../utils/api";
import { parseDate } from "../utils/tools";
import { toast, ToastContainer } from "react-toastify";

export default function Feedback(props: pages_interface) {
  const [feedbacks, setFeedback] = useState<feedback[] | null>([]);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await get("feedback");
      if (response.error) {
        toast(response.error);
        setFeedback(null);
      }
      if (response.data === null) {
        setFeedback(null);
      } else {
        setFeedback(response.data);
      }

      setSearch(true);
    })();
  }, [feedbacks === null]);

  return (
    <div
      id={props.id}
      className={`flex flex-col ${props.className} gap-1 w-full h-full p-3 md:p-10`}
    >
      {search && feedbacks !== null ? (
        <>
          {feedbacks && feedbacks.length > 0 ? (
            <div className="flex flex-col md:flex-row md:flex-wrap w-full h-full gap-2 justify-center box-border md:overflow-x-auto overflow-y-auto md:overflow-y-hidden p-2">
              {feedbacks.map((feedback_: feedback, i: number) => {
                return (
                  <div
                    key={i}
                    className={`flex flex-col items-center md:h-1/3 w-full md:w-2/7 dark:bg-slate-900 dark:border dark:border-slate-500 dark:border-solid  text-white p-2 box-border overflow-hidden rounded gap-2`}
                  >
                    <h1 className="text-xl font-bold">
                      {feedback_.application.substring(0, 25) ?? ""}
                    </h1>
                    <div className="flex flex-col md:h-full w-full justify-center text-center">
                      <h3>{feedback_.message}</h3>
                    </div>
                    <div className="text-end w-full">
                      <span className="text-xs">
                        {parseDate(feedback_.date)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col h-full w-full items-center justify-center gap-3">
              <p className="text-[2rem] text-center">No Feedback Yet</p>
              <p className="w-2/3 md:max-w-1/3 lg:max-w-1/2 text-center text-[1.25rem]">
                Currently, there is no feedback from any of my applications, of
                you want to, please use my app first and give me some feedback.
              </p>
              <span className="border border-solid border-slate-950 dark:border-slate-500 p-2 px-4 rounded-full hover:bg-slate-950 hover:text-white hover:dark:bg-slate-200 hover:dark:text-black">Give me a feedback through this page</span>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col h-full w-full text-center items-center justify-center gap-3">
          <p className="text-[2rem]">Please wait for a moment</p>
          <p className="text-[1.25rem]">Backend is currently loading</p>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
