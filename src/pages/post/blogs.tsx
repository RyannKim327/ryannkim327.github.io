import { useState } from "react";
import Input from "../../widgets/input";

export default function PostBlog() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    code: "",
  });

  return (
    <div className="flex flex-col justify-center items-center p-4 bg-[#f6f6f6] text-black dark:bg-[#0c0c0c] dark:text-white w-dvw h-dvh">
      <div className="flex flex-col border border-solid border-[#0c0c0c] dark:border-[#f9f9f6] pt-6 px-6 pb-2">
        <h1 className="text-xl">Posting a blog content</h1>
        <Input value={formData.title} name="title" onChange={setFormData}>
          Title
        </Input>
      </div>
    </div>
  );
}
