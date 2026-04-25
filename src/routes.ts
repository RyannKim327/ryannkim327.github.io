import Home from "@/routes/home/index.svelte"
import Blogs from "@/routes/user/blogs.svelte"
import Blog from "@/routes/user/blog.svelte"
import Certificates from "@/routes/user/certificates.svelte"
import Admin from "@/routes/admin/index.svelte"
import EditBlog from "@/routes/admin/edit-blog.svelte"

export default {
	"/": Home,
	"/blogs": Blogs,
	"/blog/:id": Blog,
	"/admin/edit-blog/:id": EditBlog,
	"/certificates": Certificates,
	"/admin": Admin,
	"/admin/:page": Admin,
	"*": Home
}
