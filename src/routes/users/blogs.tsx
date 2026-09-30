import { Markdown, MarkdownExcerpt } from "@/components/widgets/markdown"
import Modal from "@/components/widgets/modal"
import type { blogInterface } from "@/interface"
import { get } from "@/lib/api"
import { House } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router"

export default function Blogs() {
  const [searchParams] = useSearchParams()
  const p = searchParams.get("p") ?? "1"
  const v = searchParams.get("v")

  const [blogs, setBlogs] = useState<blogInterface[]>([])
  const [blog, setBlog] = useState<blogInterface | null>(null)
  const [pages, setPages] = useState(0)

  useEffect(() => {
    (async () => {

      if (v) {
        const { data: b } = await get("blog", {
          id: v
        })
        if (b) {
          setBlog(b as blogInterface)
        }
      }

      let _p = p ?? "1"
      let page = 1
      try {
        page = parseInt(_p)
      } catch (_) { }
      const data = await get("blog", {
        limit: 6,
        page: page
      })
      console.log(data.pages)
      if (data.pages) {
        setPages(data.pages)
      }
      if (data.data) {
        setBlogs(data.data as blogInterface[])
      }
    })()
  }, [])

  useEffect(() => {
    (async () => {

      if (v) {
        const { data: b } = await get("blog", {
          id: v
        })
        if (b) {
          setBlog(b as blogInterface)
        }
      }

      let _p = p ?? "1"
      let page = 1
      try {
        page = parseInt(_p)
      } catch (_) { }
      const data = await get("blog", {
        limit: 6,
        page: page
      })
      console.log(data.pages)
      if (data.pages) {
        setPages(data.pages)
      }
      if (data.data) {
        setBlogs(data.data as blogInterface[])
      }
    })()
  }, [p, v])

  function viewBlog(id: number) {
    const hash = window.location.hash;
    const [path, queryString] = hash.split("?");
    const params = new URLSearchParams(queryString || "");
    if (id < 0) {
      params.delete("v");
      window.location.hash = `${path}?${params.toString()}`;
      window.location.reload()
    } else {
      params.set("v", id.toString());
      window.location.hash = `${path}?${params.toString()}`;
    }
  }

  function setPage(page: number) {
    const hash = window.location.hash; // #/blogs?p=2
    const [path, queryString] = hash.split("?");
    const params = new URLSearchParams(queryString || "");
    params.set("p", page.toString())
    window.location.hash = `${path}?${params.toString()}`
    // window.location.reload()
  }

  return (
    <div className="flex flex-wrap items-center justify-center w-full h-full gap-5 p-5 overflow-y-auto overflow-x-hidden">
      {blogs.length > 0 ?
        blogs.map((b: blogInterface, i: number) => {
          return (
            <div
              className="flex flex-col relative group w-[calc(90%-0.5rem)] lg:w-[calc(33.333%-1rem)] card p-3 aspect-video gap-3 overflow-hidden"
              key={`${i + 1}. ${b.title}`}>
              <span className="text-[1.25rem]">{b.title.substring(0, 70)} {b.title.length > 70 ? "..." : ""}</span>
              <MarkdownExcerpt
                // onClick={() => {
                //   c.link ? window.open(c.link, "_blank") : c.url
                // }}
                content={`${b.content}`} />
              <button
                onClick={() => {
                  viewBlog(b.id)
                }}
                className="absolute silk cursor-pointer bg-linear-to-b from-bg-75 to-bg p-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 bottom-0 right-0 left-0 z-10 transition-all delay-75">View</button>
            </div>
          )
        })
        : null
      }
      {
        pages > 0 ?
          <div className="flex justify-center fixed z-10 bottom-0 right-0 left-0 p-2">
            <div className="flex items-center justify-center bg-card/80 p-2 rounded px-2 gap-3">
              <Link to="/"
                className={` rounded px-2 cursor-pointer`}
              >
                <House />
              </Link>
              {
                Array.from({ length: pages }).map((_, i: number) => {
                  return (
                    <span
                      className={`${p == (i + 1).toString() ? "bg-fg text-bg" : ""} rounded px-2 cursor-pointer`}
                      onClick={() => {
                        setPage(i + 1)
                      }}
                    >{i + 1}</span>
                  )
                })
              }
            </div>
          </div>
          : null
      }
      {
        blog ?
          <Modal visible={blog !== null} setVisible={() => { viewBlog(-1) }}>
            <div className="flex flex-col p-3 flex-1 overflow-hidden">
              <span className="silk pb-2 text-center text-lg w-full border-b border-b-fg border-b-solid">{blog.title}</span>
              <Markdown
                className="flex-1 overflow-y-auto p-5"
                content={blog.content} />
            </div>
          </Modal>
          : null
      }
    </div >
  )
}
