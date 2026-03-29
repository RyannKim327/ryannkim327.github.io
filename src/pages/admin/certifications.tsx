import { useState } from "react";
import Input from "../../widgets/input";
import { adminPost } from "../../utils/api";
import { toast, ToastContainer } from "react-toastify";
import { certificates } from "../../utils/interfaces";

export default function PostCerti() {
  const [formData, setFormData] = useState<certificates>({
    url: "",
    source: "",
    category: "",
  });
  const [code, setCode] = useState({
    code: "",
  });
  const [sending, setSending] = useState(false);

  const submitCert = async () => {
    setSending(true);
    const response = await adminPost("certs/submit", code.code, formData);
    if (response.message) {
      toast("A new certificate posted");
      setFormData({
        url: "",
        source: "",
        category: "",
      });
      setCode({ code: "" });
    } else {
      toast(response.error);
    }
    setSending(false);
  };

  return (
    <div className="flex flex-col gap-2 w-full items-start h-full">
      <h1 className="text-center text-xl">Posting of certificate</h1>
      <div className="flex flex-col items-center w-full h-full gap-2">
        <Input value={formData} name="source" onChange={setFormData}>
          Source
        </Input>
        <Input type="password" value={code} onChange={setCode} name="code">
          Code
        </Input>
        <Input value={formData} onChange={setFormData} name="url">
          URL
        </Input>
        <Input value={formData} onChange={setFormData} name="category">
          Category
        </Input>
        <button
          disabled={sending}
          onClick={submitCert}
          className="flex flex-col border border-solid border-[#0c0c0c] dark:border-[#f9f9f6] w-full p-3 rounded-sm"
        >
          {sending ? "Please Wait" : "Submit"}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
