import { ChangeEvent, useState } from "react";
import Input from "../../widgets/input";
import { adminPost } from "../../utils/api";
import { toast, ToastContainer } from "react-toastify";

export default function PostBlog() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags_: "",
  });
  const [code, setCode] = useState({
    code: "",
  });

  const submitBlog = async () => {
    const form = {
      title: formData.title,
      content: formData.content,
      tags: formData.tags_.split(" "),
    };

    const response = await adminPost("blog/submit", code.code, form);
    if (response.message) {
      toast("A new blog posted");
      setFormData({
        title: "",
        content: "",
        tags_: "",
      });
      setCode({ code: "" });
    } else {
      toast(response.error);
    }
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
        <Input value={formData} onChange={setFormData} name="tags_">
          Tags
        </Input>
        <div className="flex flex-col border border-solid border-[#0c0c0c] dark:border-[#f9f9f6] w-full h-full">
          <span className="pl-4">Content</span>
          <textarea
            className="w-full border-none outline-none px-2 h-full"
            name=""
            id=""
            value={formData.content}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
              setFormData((prev) => ({
                ...prev,
                content: event.target.value,
              }));
            }}
          ></textarea>
        </div>
        <button
          onClick={submitBlog}
          className="border p-2 border-solid border-[#0c0c0c] dark:border-[#f9f9f6] w-full"
        >
          Submit
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
