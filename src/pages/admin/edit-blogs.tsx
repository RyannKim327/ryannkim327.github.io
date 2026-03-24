import { useEffect, useState } from "react";
import Input from "../../widgets/input";
import MDEditor from "@uiw/react-md-editor";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, useParams } from "react-router";
import { adminPut, get } from "../../utils/api";

export default function EditBlog() {
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    tags: "",
    media: "",
    content: "",
    time: "",
  });
  const [code, setCode] = useState({ code: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await get("blog", {
        id: id,
      });
      if (response.error) {
        toast(`There's a problem with the server, please reload the webpage`);
        return;
      }
      const data = response.data;
      setFormData({
        title: data.title,
        tags: data.tags.join(" "),
        media: data.media ? data.media.join(" ") : "",
        content: data.content,
        time: data.time,
      });
    })();
  }, [id]);

  const submitBlog = async () => {
    setSending(true);
    const resp = await adminPut("blog", code.code, {
      id: id,
      title: formData.title,
      tags: formData.tags.split(" "),
      media: formData.media.split(" "),
      content: formData.content,
      time: formData.time,
    });
    if (resp.error) {
      toast(resp.error);
    } else {
      toast("Data Updated Successfully");
      navigate(`/blog/${id}`);
    }
    setSending(false);
  };

  return (
    <div className="flex flex-col gap-2 w-full items-start h-full">
      <h1 className="text-center text-xl">Edit Blog</h1>
      <div className="flex flex-col items-center w-full h-full gap-2">
        <Input value={formData} name="title" onChange={setFormData}>
          Title
        </Input>
        <Input type="password" value={code} onChange={setCode} name="code">
          Code
        </Input>
        <Input value={formData} onChange={setFormData} name="tags">
          Tags
        </Input>
        <Input value={formData} onChange={setFormData} name="media">
          Media Files (ID)
        </Input>
        <Input value={formData} onChange={setFormData} name="time">
          Time
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
