import { ChangeEvent, useEffect, useState } from "react";
import { abt } from "../../utils/interfaces";
import { get } from "../../utils/api";
import Input from "../../widgets/input";

export default function Experiences() {
  const [exp, setExp] = useState<abt[]>([]);
  const [index, setIndex] = useState(-1);
  const [mexp, setMexp] = useState<abt>({
    title: "",
    year: 0,
    icon: "",
    content: [],
  });

  useEffect(() => {
    (async () => {
      const data = await get("experiences");
      if (data.message) {
        setExp(data.data);
      }
    })();
  }, []);

  return (
    <div className="flex flex-col gap-2 w-full h-full">
      <h1 className="text-center text-xl">Update Experiences</h1>
      <div className="flex w-full p-5 gap-5 h-full">
        <div className="flex flex-col gap-1 min-w-1/3 overflow-y-scroll overflow-x-hidden h-full">
          {exp.map((xp: abt, i: number) => {
            return (
              <span
                onClick={() => {
                  setMexp(xp);
                  setIndex(i);
                }}
                className={`flex flex-row justify-between p-2 gap-2 rounded cursor-pointer ${i === index ? "bg-slate-950" : ""}`}
              >
                <span>{xp.title}</span>
                <span>{xp.year}</span>
              </span>
            );
          })}
        </div>
        <div
          className={`flex flex-col gap-2 h-full ${index >= 0 ? "w-full" : "hidden"}`}
        >
          <Input value={mexp} name="title" onChange={setMexp}>
            Title
          </Input>
          <Input value={mexp} name="year" onChange={setMexp}>
            Year
          </Input>
          <div className="flex flex-col border border-solid h-full border-[#0c0c0c] dark:border-[#f9f9f6] w-full gap-2">
            <span className="pl-4">Content</span>
            <textarea
              className="w-full border-none outline-none px-2 h-full resize-none"
              name=""
              id=""
              value={mexp?.content?.join("\n")}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                setMexp((prev) => ({
                  ...prev,
                  content: event.target.value.split("\n"),
                }));
              }}
            ></textarea>
          </div>
          <button className="flex flex-col border border-solid border-[#0c0c0c] dark:border-[#f9f9f6] w-full p-3">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
