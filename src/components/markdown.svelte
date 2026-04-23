<script>
	export let content = ""
	
	import DOMPurify from "dompurify"
	import {marked} from "marked"
</script>

<div class="markdown-preview h-full w-full overflow-none overflow-x-auto">
	{@html DOMPurify.sanitize(marked(content))}
</div>

<style>
	.markdown-preview {
		background: #282a36;
		color: #f8f8f2;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
			sans-serif;
		line-height: 1.7;
		padding: 0.25rem 0.75rem;
		border-radius: 10px;

		:global(h1),
		:global(h2),
		:global(h3),
		:global(h4) {
			color: #bd93f9;
			font-weight: 600;
			margin-top: 1.5em;
			margin-bottom: 0.5em;
		}

		:global(h1) {
			font-size: 2em;
			border-bottom: 1px solid #44475a;
			padding-bottom: 0.3em;
		}

		:global(h2) {
			font-size: 1.5em;
			border-bottom: 1px solid #44475a;
			padding-bottom: 0.3em;
		}

		:global(p) {
			margin: 0.8em 0;
		}

		:global(a) {
			color: #8be9fd;
			text-decoration: none;
		}

		:global(a:hover) {
			text-decoration: underline;
		}

		:global(ul),
		:global(ol) {
			padding-left: 1.5em;
			margin: 1em 0;
		}

		:global(li) {
			margin: 0.4em 0;
		}

		:global(blockquote) {
			border-left: 4px solid #6272a4;
			padding: 0.5em 1em;
			background: #44475a;
			border-radius: 6px;
			margin: 1em 0;
		}

		:global(code) {
			background: #44475a;
			color: #f1fa8c;
			padding: 0.2em 0.4em;
			border-radius: 6px;
			font-size: 0.9em;
			font-family: ui-monospace, monospace;
		}

		:global(pre) {
			background: #1e1f29;
			color: #f8f8f2;
			padding: 1em;
			border-radius: 8px;
			overflow-x: auto;
			margin: 1em 0;
		}

		:global(pre code) {
			background: none;
			padding: 0;
			color: inherit;
		}

		:global(table) {
			border-collapse: collapse;
			width: 100%;
			margin: 1em 0;
		}

		:global(th),
		:global(td) {
			border: 1px solid #44475a;
			padding: 0.5em 0.75em;
		}

		:global(th) {
			background: #44475a;
		}

		:global(img) {
			max-width: 100%;
			border-radius: 8px;
			margin: 1em 0;
		}

		:global(hr) {
			border: none;
			border-top: 1px solid #44475a;
			margin: 2em 0;
		}

		:global(strong) {
			color: #ff79c6;
		}

		:global(em) {
			color: #50fa7b;
		}

		:global(input[type="checkbox"]) {
			margin-right: 0.5em;
		}

		:global(pre::-webkit-scrollbar) {
			height: 8px;
		}

		:global(pre::-webkit-scrollbar-thumb) {
			background: #6272a4;
			border-radius: 4px;
		}
	}
</style>
