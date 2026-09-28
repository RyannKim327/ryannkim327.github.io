import { MarkdownEditor } from "@/components/widgets/markdown-editor"
import { useState } from "react"
import { useParams } from "react-router"

export default function EditBlog() {
  const { id } = useParams()
  const [content, setContent] = useState("")

  return (
    <div>
      {id}
      <MarkdownEditor
        value={content}
        onChange={setContent} />
    </div>
  )
}
