<script lang="ts">
	import { post } from "@/lib/fetch";
	import Markdown from "@/components/markdown.svelte";
	import toast, { Toaster } from "svelte-french-toast";

	let {
		expr = [],
		projects = [],
		blogs = [],
		wakatime = {},
		parseData = false,
	} = $props();

	let devProfile = $derived({
		name: {
			firstname: "Ryann Kim",
			middlename: "Malabanan",
			lastname: "Sesgundo",
		},
		nicknames: ["Kim", "Ryann", "Kimmy"],
		weekly_activity: wakatime,
		expriences: expr,
		alias: ["RyannKim327", "RySes", "RySes Malabanan", "Krysanne Guinmods"],
		birthyear: 2001,
		sex: "male",
		pronounce: "He",
		github: "https://github.com/RyannKim327",
		linkedin: "https://linkedin.com/in/RyannKim327",
		facebook: "https://fb.me/masterpieceofpaper",
		npmjs: "https://npmjs.com/~ryannkim327",
		personality: [
			"Boastful but low-key",
			"Simple",
			"Ambivert but more preferred to be alone",
			"Talkative",
			"Cheerful",
		],
	});

	let base = $derived({
		role: "system",
		content:
			`You are K.Guin (Krysanne Guinmods), a personal chatbot centered on the developer.

			Use ONLY: ${JSON.stringify(devProfile)}
			This defines facts, tone, personality, and perspective.

			Time: ${new Date()}

			Rules:
			- Keep the developer as the main focus.
			- Introduce yourself once only.
			- Prefer answers from provided data; redirect unrelated topics back to the developer.
			- Repeated unrelated topics → politely decline + redirect. Casual chat allowed if developer context remains.
			- Friendly, casual, light humor.
			- Use user language when possible.
			- Compliment naturally.
			- Developer nickname allowed.
			- Keep responses natural and concise.
			- Developer links/socials → Markdown links.
			- No tables; use lists.
			- Use the experience as secondary reference or backup reference
			- Exclude: RyannKim327/git-out, RyannKim327/RyannKim327.`.trim(),
	});

	let show = $state(false);
	let sending = $state(false);
	let message = $state("");
	let chats = $state([
		{
			role: "assistant",
			content: "Hello, I am k.guin, Ryann Kim's personal AI Assistant",
		},
	]);

	async function send() {
		sending = true;
		chats.push({
			content: message,
			role: "user",
		});
		message = "";
		const api = await post("ai/chat", {
			messages: [base, ...chats],
		});
		if (api.error) {
			toast(api.error.toString(), {
				position: "bottom-right",
			});
			sending = false;
			return;
		}

		chats.push({
			content: api.content,
			role: "assistant",
		});
		sending = false;
	}
</script>

<div class="fixed bottom-0 right-0 p-10 pointer-events-none z-10">
	{#if show}
		<div
			class="flex flex-col pointer-events-auto h-125 w-[calc(100-0.5rem%)] md:w-100 bg-[#cacecf] dark:bg-[#121212]/50 backdrop-blur-md p-2 rounded border border-solid"
		>
			<div class="flex justify-between">
				<div class="flex flex-col">
					<span>k.guin</span>
					<span>Powered by ChatGPT 4o mini</span>
				</div>
				<span
					onclick={() => {
						show = false;
					}}
					class="cursor-pointer"
				>
					<i class="fa-solid fa-x"></i>
				</span>
			</div>
			<hr />
			<div class="flex flex-col flex-1 gap-2 p-2 h-full w-full overflow-y-auto">
				{#each chats as chat}
					{#if chat.role === "user"}
						<div class="flex w-full justify-end">
							<span
								class="max-w-[calc(75%-0.5rem)] border border-solid bg-[#f0f8ff] text-[#121212] border-[#121212] dark:bg-[#121212] dark:text-[#f0f8ff] dark:border-[#f0f8ff] px-2 py-1 rounded"
							>
								{chat.content}
							</span>
						</div>
					{:else}
						<div class="flex w-full justify-start">
							<span class="max-w-[calc(75%-0.5rem)] rounded">
								<Markdown content={chat.content} />
							</span>
						</div>
					{/if}
				{/each}
			</div>
			<div
				class="flex input w-full items-center justify-center p-1 border border-[#121212] dark:border-[#f0f8ff] border-solid rounded"
			>
				<input
					type="text"
					disabled={sending}
					oninput={(v: Event) => {
						message = (v.target as HTMLInputElement).value;
					}}
					onkeydown={(e: KeyboardEvent) => {
						if (e.keyCode === 13) {
							send();
						}
					}}
					value={message}
					class="outline-none w-full flex-1"
				/>
				<span
					onclick={() => {
						if (!sending) {
							send();
						}
					}}
					class="p-1 cursor-pointer"
				>
					{#if !sending}
						<i class="fa-regular fa-paper-plane"></i>
					{/if}
				</span>
			</div>
		</div>
	{:else if parseData}
		<span
			onclick={() => {
				show = true;
			}}
			class="bg-[#cacbcc] dark:bg-[#121212] border-[#212121] dark:border-[#f0f8ff] p-3 rounded-full border border-solid pointer-events-auto"
		>
			<i class="fa-solid fa-robot"></i>
		</span>
	{/if}
	<Toaster />
</div>

<style>
	.preview {
		background: #282a36;
		color: #f8f8f2;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
			sans-serif;
		line-height: 1.7;
		padding: 1rem;
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
