import { ReactNode, useEffect, useState } from "react";
import session from "../utils/session_controller";
import Input from "../widgets/input";

interface adminControllerProps {
  children: ReactNode;
}

export default function AdminController(props: adminControllerProps) {
  const [adminKey, setAdminKey] = useState("hello");
  const [sending, setSending] = useState(false);
  const [code, setCode] = useState({
    code: "",
  });

  useEffect(() => {
    setAdminKey(session("admin") ?? "hello");
  }, []);

  if (adminKey) {
    return props.children;
  }

  const submitCode = () => {
    setSending(true);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-4 bg-[#f6f6f6] text-black dark:bg-[#0c0c0c] dark:text-white w-dvw h-dvh gap-2 select-none">
      <div className="flex flex-col items-center bg-zinc-300 text-black dark:bg-slate-800 dark:text-white p-5 rounded">
        <div className="flex flex-col items-center">
          <span className="text-xl">Login</span>
          <span className="text-sm">Please enter your account passkey</span>
        </div>
        <Input value={code} onChange={setCode} name="code">
          Passkey
        </Input>
        {!sending ? (
          <button
            onClick={submitCode}
            className="border p-2 border-solid border-[#0c0c0c] dark:border-[#f9f9f6] w-full rounded-sm"
          >
            Submit
          </button>
        ) : null}
      </div>
    </div>
  );
}
