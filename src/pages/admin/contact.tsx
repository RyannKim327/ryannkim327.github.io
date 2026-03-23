import { useState } from "react";
import { contact } from "../../utils/interfaces";
import { adminGet } from "../../utils/api";
import Input from "../../widgets/input";
import { toast } from "react-toastify";

export default function Contact() {
  const [list, setList] = useState<contact[]>([]);
  const [code, setCode] = useState({ code: "" });
  const [feed, setFeed] = useState(false);

  const fetchContact = async () => {
    setFeed(true);
    const data = await adminGet("contact", code.code);
    if (data.error) {
      toast(data.error);
    } else {
      setList(data.data);
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full items-start h-full">
      <h1 className="text-center text-xl">People who contacted you</h1>
      {!feed ? (
        <div className="flex flex-col items-center w-full h-full gap-2">
          <Input value={code} onChange={setCode} name="code">
            Code
          </Input>
          <button onClick={fetchContact}>Submit</button>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full h-full gap-2">
          {list.map((c) => {
            return (
              <div className="flex flex-col aspect-video bg-zinc-200 w-1/3 shadow-sm shadow-black text-black dark:bg-slate-900 dark:border dark:border-slate-500 dark:border-solid dark:text-white p-4 rounded-lg overflow-hidden gap-1">
                <span className="text-sm">
                  {c.name} - {c.email}
                </span>
                <span className="border-l borderl-l-3 border-l-black dark:border-l-white h-full w-full pl-2">
                  {c.content}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
