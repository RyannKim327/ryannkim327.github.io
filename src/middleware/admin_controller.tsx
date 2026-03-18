import { ReactNode, useEffect, useState } from "react";
import session from "../utils/session_controller";
import Input from "../widgets/input";
import { decoder } from "../utils/tools";
import { toast, ToastContainer } from "react-toastify";

interface adminControllerProps {
  children: ReactNode;
}

export default function AdminController(props: adminControllerProps) {
  const [adminKey, setAdminKey] = useState("");
  const [sending, setSending] = useState(false);
  const [code, setCode] = useState({
    code: "",
  });
  const [trial, setTrial] = useState(0);
  const serialKey = decoder([98, 108, 97, 99, 107, 104, 101, 97, 114, 116]);

  useEffect(() => {
    setAdminKey(session("user") ?? "");
  }, []);

  if (adminKey === serialKey) {
    return props.children;
  }

  const submitCode = () => {
    setSending(true);
    if (code.code === serialKey && trial >= 0) {
      const usr = session("user", code.code);
      setAdminKey(usr ?? "");
    } else {
      setTrial((t) => (t -= 1));
      toast("Try Again");
    }
    setSending(false);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-4 bg-[#f6f6f6] text-black dark:bg-[#0c0c0c] dark:text-white w-dvw h-dvh gap-2 select-none">
      <div className="flex flex-col items-center bg-zinc-300 text-black dark:bg-slate-800 dark:text-white p-5 rounded gap-2">
        <div className="flex flex-col items-center">
          <span className="text-xl">Login</span>
          <span className="text-sm">Please enter your account passkey</span>
        </div>
        <Input
          onEnter={submitCode}
          type="password"
          value={code}
          onChange={setCode}
          name="code"
        >
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
      <ToastContainer />
    </div>
  );
}
