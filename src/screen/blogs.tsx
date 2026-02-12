import { useEffect, useState } from "react";
import { blogs } from "../utils/interfaces";
import { get } from "../utils/api";

export default function Blogs(props: pages_interface) {
  const [blogs, setBlogs] = useState<blogs[]>([]);

  useEffect(() => {
    (async () => {
      const data = await get("");
    })();
  }, []);

  return (
    <div
      id={props.id}
      className={`${props.className} flex flex-col overflow-hidden w-full h-full`}
    >
      <h1>Blogs</h1>
    </div>
  );
}
