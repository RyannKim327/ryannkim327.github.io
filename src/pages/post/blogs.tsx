import { ChangeEvent, useState } from "react";
import Input from "../../widgets/input";

export default function PostBlog() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    code: "",
    tags: "",
  });

  return (
    <div className="flex flex-col justify-center items-center p-4 bg-[#f6f6f6] text-black dark:bg-[#0c0c0c] dark:text-white w-dvw h-dvh">
      <div className="flex flex-col border border-solid border-[#0c0c0c] dark:border-[#f9f9f6] pt-6 px-6 pb-2 gap-2 w-1/2">
        <h1 className="text-center text-xl">Posting a blog content</h1>
        <Input value={formData.title} name="title" onChange={setFormData}>
          Title
        </Input>
        <Input value={formData.code} onChange={setFormData} name="code">
          API Key
        </Input>
        <Input value={formData.tags} onChange={setFormData} name="tags">
          Tags
        </Input>
        <div className="flex flex-col border border-solid border-[#0c0c0c] dark:border-[#f9f9f6] w-full">
          <span className="pl-4">Content</span>
          <textarea
            className="w-full border-none outline-none px-2 h-[10rem]"
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
        <button className="border border-solid border-[#0c0c0c] dark:border-[#f9f9f6]">
          Submit
        </button>
      </div>
    </div>
  );
}
