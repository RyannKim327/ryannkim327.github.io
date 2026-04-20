<script lang="ts">
	export let class_: string = ""
	export let styl: string = ""
</script>

<div class={`p-2 bg-[#212121] rounded shine ${class_}`}>
<slot />
</div>

<style>
	.shine {
			position: relative;
			overflow: hidden;
	}
	
	.shine::before {
		content: "";
		position: absolute;
		top: -50%;
		left: -100%;
		width: 100%;
		height: 200%;
		background: linear-gradient(
			90deg,
			transparent 10%,
			rgba(255, 255, 255, 0.3),
			transparent 90%
		);
		animation: shine 2s ease-in-out infinite;
		pointer-events: none;
	}

	@keyframes shine {
		0% {
			left: -110%;
		}
		100% {
			left: calc(100% + 150px);
		}
	}
</style>
