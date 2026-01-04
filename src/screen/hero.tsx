import { pages_interface } from "../utils/interfaces";

import Self from "./../assets/self.png";
import { useEffect, useState } from "react";
import { get } from "../utils/api";

export default function Hero(props: pages_interface) {
  const [notice, setNotice] = useState("The server is waking up");
  const [change, setChange] = useState(false);

  useEffect(() => {
    (async () => {
      const wakeup = await get("");
      setNotice(wakeup.message);
      setChange(true);
      setTimeout(() => {
        setNotice("");
      }, 5000);
    })();
  }, []);

  return (
    <div
      className="flex flex-row items-center justify-center h-full w-full overflow-hidden"
      id={props.id}
    >
      <img
        src={Self}
        className="hidden md:inline h-full md:mt-[-3rem] rounded-md"
      />
      <div className="flex flex-col justify-center h-3/4 md:ml-[-2.5rem] gap-3">
        <h1 className="text-[2.5rem]">Ryann Kim M. Sesgundo</h1>
        <h3 className="text-[1.75rem]">A developer</h3>
      </div>
      {notice.length > 0 ? (
        <div
          className={`fixed z-10 bottom-5 ${change ? "bg-green-800" : "bg-red-700"} px-2 rounded-sm`}
        >
          {notice}
        </div>
      ) : null}
    </div>
  );
}
