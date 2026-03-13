import { ChangeEvent, useEffect, useState } from "react";
import { abt } from "../../utils/interfaces";
import { adminPost, get } from "../../utils/api";
import Input from "../../widgets/input";
import { ToastContainer, toast } from "react-toastify";

export default function Experiences() {
  const [exp, setExp] = useState<abt[]>([]);
  const [index, setIndex] = useState(-1);
  const [mexp, setMexp] = useState<abt>({
    title: "",
    year: 0,
    icon: "",
    content: [],
  });
  const [sending, setSending] = useState(false);
  const [code, setCode] = useState({ code: "" });

  useEffect(() => {
    (async () => {
      const data = await get("experiences");
      if (data.message) {
        setExp(data.data);
      }
    })();
  }, []);

  const submitExp = async () => {
    setSending(true);
    const experiences: abt[] = exp;
    experiences[index] = mexp;
    const response = await adminPost(
      "experiences/submit",
      code.code,
      experiences,
    );
    if (response.message) {
      setIndex(-1);
      toast("Data Updated successfully");
    } else {
      toast("Didn't update");
    }
    setSending(false);
  };

  return (
    <div className="flex flex-col gap-2 w-full h-full">
      <h1 className="text-center text-xl">Update Experiences</h1>
      <div className="flex flex-col md:flex-row w-full p-5 gap-5 h-full">
        <div className="flex flex-col gap-1 min-w-1/3 overflow-y-scroll overflow-x-hidden h-full">
          {exp.map((xp: abt, i: number) => {
            return (
              <span
                onClick={() => {
                  setMexp(xp);
                  setIndex(i);
                }}
                className={`flex flex-row justify-between p-2 gap-2 rounded cursor-pointer ${i === index ? "bg-slate-950 text-white" : ""}`}
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
          <Input value={mexp} name="icon" onChange={setMexp}>
            Icon
          </Input>
          <Input value={code} onChange={setCode} name="code">
            Code
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
          <button
            disabled={sending}
            onClick={submitExp}
            className="flex flex-col border border-solid border-[#0c0c0c] dark:border-[#f9f9f6] w-full p-3"
          >
            {sending ? "Please Wait" : "Submit"}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
