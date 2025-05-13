import { useEffect, useState } from "react";
import { z } from "zod";

const envSchema = z.object({
  VITE_GITHUB_GIST: z.string(),
  VITE_GITHUB_TOKEN: z.string(),
});

const env = envSchema.parse(import.meta.env);

export default function Poetry(props: unknown) {
  const [poems, setPoems] = useState([]);
  const [poem, setPoem] = useState({
    title: "Title",
    content: "Content\nKo\nKunyare",
  });
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://api.github.com/gists/${env.VITE_GITHUB_GIST}`,
        {
          headers: {
            Authorization: `token ${env.VITE_GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
          },
        },
      );
      setPoems(data);
    })();
  }, []);
  return (
    <div id={props.id} className={`${props.className} `}>
      <h1 className="text-base lg:text-2xl">Poetry</h1>
      <div className="flex w-full py-2">
        <input
          type="text"
          className="rounded-sm border-[1px] border-white px-2 w-full"
          placeholder="Search for Poem"
        />
      </div>
      <div className="box-border h-full">
        <h3>{poem.title}</h3>
        <div className="overflow-y-scroll">
          {poem.content.split("\n").map((c) => {
            return <p>{c}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
