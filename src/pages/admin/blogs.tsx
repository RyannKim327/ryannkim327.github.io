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
    <div className="flex flex-col gap-2 w-full">
      <h1 className="text-center text-xl">Posting a blog content</h1>
      <Input value={formData} name="title" onChange={setFormData}>
        Title
      </Input>
      <Input value={formData} onChange={setFormData} name="code">
        Code
      </Input>
      <Input value={formData} onChange={setFormData} name="tags">
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
      <button className="border p-2 border-solid border-[#0c0c0c] dark:border-[#f9f9f6]">
        Submit
      </button>
    </div>
  );
}
