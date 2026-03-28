import { useState } from "react";
import Input from "../../widgets/input";
import { adminPostMultipart } from "../../utils/api";
import { toast, ToastContainer } from "react-toastify";

export default function UploadImage() {
  const [admin, setAdmin] = useState({
    code: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const uploadFile = async () => {
    if (!file) {
      toast("No file selected");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);

    setSending(true);
    const res = await adminPostMultipart("upload/submit", admin.code, formData);
    console.error(res);
    setSending(false);
    setSent(true);
    if (res?.error) {
      toast(res.error);
    }

    if (res?.from.description) {
      toast(res.from.description);
      setSending(false);
      return;
    }

    const file_ = res?.from.result;
    if (file_.video) {
      setAdmin({
        code: file_.video.file_id,
      });
    } else if (file_.document) {
      setAdmin({
        code: file_.document.file_id,
      });
    } else {
      const f = file_.photo;
      setAdmin({
        code: f[f.length - 1].file_id,
      });
    }
    toast("File Uploaded Successfully");
  };

  return (
    <div className="flex flex-col items-start justify-center gap-2 rounded min-w-1/3">
      <h1 className="text-xl">Upload Image</h1>
      <div className="flex flex-col items-center h-full w-full gap-2">
        <Input
          type={sent ? "text" : "password"}
          value={admin}
          name="code"
          onChange={setAdmin}
        >
          Code
        </Input>
        <div className="flex flex-col border border-solid border-[#0c0c0c] dark:border-[#f9f9f6] w-full gap-2 rounded-sm">
          <label htmlFor="file" className="text-sm px-4">
            File To Upload
          </label>
          <input
            id="file"
            className="w-full border-none outline-none px-2"
            type="file"
            onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
              const file = e.target.files?.[0];
              if (file) {
                setFile(file);
              }
            }}
          />
        </div>
        {sending ? (
          <span>Sending</span>
        ) : (
          <button
            onClick={uploadFile}
            type="submit"
            className="p-2 border border-black dark:border-white border-solid w-full rounded-sm"
          >
            Upload image
          </button>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}
