import { useState } from "react";
import Input from "../../widgets/input";
import { adminPostMultipart } from "../../utils/api";

export default function UploadImage() {
  const [admin, setAdmin] = useState({
    code: "",
  });
  const [fileId, setFileId] = useState("");
  const [sending, setSending] = useState(false);
  const formData = new FormData();

  const uploadFile = async () => {
    setSending(true);
    const res = await adminPostMultipart(
      "upload-image/submit",
      admin.code,
      formData,
    );
    const file = res.from.result.photo;
    setFileId(file[file.length - 1].file_id);
    setSending(false);
  };

  return (
    <div className="flex flex-col text-black dark:bg-slate-950 bg-[#f9fafb] dark:text-white w-dvw h-dvh items-center justify-center">
      <div className="flex flex-col items-center justify-center bg-gray-50/25 gap-2 p-2 rounded min-w-1/3">
        <h1 className="text-xl">Upload Image</h1>
        <h2>{fileId == "" ? "File ID will paste here later on" : fileId}</h2>
        <Input value={admin} name="code" onChange={setAdmin}>
          Code
        </Input>
        <div className="flex flex-col border border-solid border-[#0c0c0c] dark:border-[#f9f9f6] w-full gap-2">
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
                formData.append("image", file);
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
            className="p-2 border border-black dark:border-white border-solid w-full rounded"
          >
            Upload image
          </button>
        )}
      </div>
    </div>
  );
}
