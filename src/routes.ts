import Home from "@/routes/home/index.svelte"
import Admin from "@/routes/admin/index.svelte"

export default {
	"/": Home,
	"/admin": Admin
}
