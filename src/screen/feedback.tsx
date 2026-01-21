import { useEffect, useState } from "react";
import { feedback, pages_interface } from "../utils/interfaces";
import { get } from "../utils/api";

export default function Feedback(props: pages_interface) {
  const [feedbacks, setFeedback] = useState<feedback[]>([]);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await get("feedback");
      if (response.error) {
        setSearch(true);
      } else {
        setFeedback(response.data);
      }
    })();
  });

  return (
    <div
      id={props.id}
      className={`flex flex-col ${props.className} gap-1 w-full h-full py-2`}
    >
      <h1 className="text-base lg:text-2xl">Feedback and testimonies</h1>
      {search ? (
        <div className="flex w-full gap-2 box-border overflow-x-auto overflow-y-hidden p-2">
          {feedbacks.length > 0 ? (
            <>
              {feedbacks.map((feedback_: feedback) => {
                <div>
                  <h1>{feedback_.application}</h1>
                  <h3>{feedback_.message}</h3>
                </div>;
              })}
            </>
          ) : (
            <div className="flex flex-col h-full w-full items-center justify-center">
              <p className="text-[2rem]">Please wait for a moment</p>
              <p className="text-[1.25rem]">Backend is currently loading</p>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col h-full w-full items-center justify-center">
          <p className="text-[2rem]">Please wait for a moment</p>
          <p className="text-[1.25rem]">Backend is currently loading</p>
        </div>
      )}
    </div>
  );
}
