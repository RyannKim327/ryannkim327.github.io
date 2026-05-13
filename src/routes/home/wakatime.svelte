<script lang="ts">
	import { onMount } from "svelte"
	import axios from "axios"

	console.log("HIHI")

	onMount(async () => {
		console.log("Yellow")

		const today = new Date()

		const formattedDate = today.toISOString().split("T")[0]
		// Example: 2026-05-12

		try {
			const { data } = await axios.get(
				`https://wakatime.com/api/v1/users/RyannKim327/durations?date=${formattedDate}`
			)

			console.log(data)
		} catch (err) {
			console.error(err)
		}

		console.log("Call")
	})
</script>

<div>
	hello Wakatime
</div>
