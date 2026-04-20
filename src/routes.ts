import Home from "@/routes/home/index.svelte"
import Blogs from "@/routes/user/blogs.svelte"
import Admin from "@/routes/admin/index.svelte"
import Poetry from "@/routes/admin/poetry.svelte"

export default {
	"/": Home,
	"/blogs": Blogs,
	"/admin": Admin,
	"/admin/:page": Admin,
	"*": Home
}
