import Home from "@/routes/home/index.svelte"
import Blogs from "@/routes/user/blogs.svelte"
import Blog from "@/routes/user/blog.svelte"
import Certificates from "@/routes/user/certificates.svelte"
import Admin from "@/routes/admin/index.svelte"

export default {
	"/": Home,
	"/blogs": Blogs,
	"/blog/:id": Blog,
	"/certificates": Certificates,
	"/admin": Admin,
	"/admin/:page": Admin,
	"*": Home
}
