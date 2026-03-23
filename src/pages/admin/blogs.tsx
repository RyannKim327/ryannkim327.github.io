import { useState } from "react";
import Input from "../../widgets/input";
import { adminPost } from "../../utils/api";
import { toast, ToastContainer } from "react-toastify";
import MDEditor from "@uiw/react-md-editor";

export default function PostBlog() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: "",
    media: "",
  });
  const [code, setCode] = useState({
    code: "",
  });

  const [sending, setSending] = useState(false);

  const submitBlog = async () => {
    setSending(true);
    const form = {
      title: formData.title,
      content: formData.content,
      tags: formData.tags.split(" "),
      media: formData.media.trim().split(" "),
    };

    const response = await adminPost("blog/submit", code.code, form);
    if (response.message) {
      toast("A new blog posted");
      setFormData({
        title: "",
        content: "",
        tags: "",
        media: "",
      });
      setCode({ code: "" });
    } else {
      toast(response.error);
    }
    setSending(false);
  };

  return (
    <div className="flex flex-col gap-2 w-full items-start h-full">
      <h1 className="text-center text-xl">Posting a blog content</h1>
      <div className="flex flex-col items-center w-full h-full gap-2">
        <Input value={formData} name="title" onChange={setFormData}>
          Title
        </Input>
        <Input value={code} onChange={setCode} name="code">
          Code
        </Input>
        <Input value={formData} onChange={setFormData} name="tags">
          Tags
        </Input>
        <Input value={formData} onChange={setFormData} name="media">
          Media Files (ID)
        </Input>
        <div className="flex flex-col w-full h-full rounded-sm">
          <MDEditor
            className="w-full h-full resize-none"
            value={formData.content}
            onChange={(text) => {
              setFormData((prev) => ({
                ...prev,
                content: text || "",
              }));
            }}
          />
        </div>
        {!sending ? (
          <button
            onClick={submitBlog}
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
