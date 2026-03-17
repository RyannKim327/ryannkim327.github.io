import { ChangeEvent, useState } from "react";
import Input from "../../widgets/input";
import { toast, ToastContainer } from "react-toastify";
import { adminPost } from "../../utils/api";
import local from "../../utils/local_controller";

interface poetry {
  title: string;
  content: string;
  code: string;
}

export default function Poetry() {
  const [compose, setCompose] = useState<poetry>({
    title: local("title") ?? "",
    content: local("content") ?? "",
    code: "",
  });

  const [sending, setSending] = useState(false);

  const submitPoem = async () => {
    setSending(true);
    const comp = {
      title: compose.title,
      content: compose.content.replace(/\n\n/gi, "\n").split("\n"),
    };
    const data = await adminPost("poetry/submit", compose.code, comp);
    if (data.error) {
      toast(data.error);
    } else {
      toast("New poem posted");
    }
    setSending(false);
  };

  return (
    <div className="flex flex-col gap-2 w-full items-start h-full">
      <h1 className="text-center text-xl">Posting a blog content</h1>
      <div className="flex flex-col items-center w-full h-full gap-2">
        <Input
          remember={true}
          name="title"
          value={compose}
          onChange={setCompose}
        >
          Title
        </Input>
        <Input name="code" value={compose} onChange={setCompose}>
          Code
        </Input>
        <div className="flex flex-col border border-solid border-[#0c0c0c] dark:border-[#f9f9f6] w-full h-full rounded-sm">
          <span className="pl-4">Content</span>
          <textarea
            className="w-full border-none outline-none px-2 h-full"
            name=""
            id=""
            value={compose.content}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
              setCompose((prev) => ({
                ...prev,
                content: event.target.value,
              }));
              local("content", event.target.value ?? "");
            }}
          ></textarea>
        </div>
        {!sending ? (
          <button
            onClick={submitPoem}
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
