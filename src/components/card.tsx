import { ReactNode } from "react"

interface cardProps {
	children: ReactNode,
	className?: string
}
export default function Card(props: cardProps) {
	return (
		<div className={`flex flex-col bg-slate-300 text-slate-900 dark:bg-slate-800 dark:text-slate-100 border border-solid rounded-lg w-[calc(95%-0.5rem)] overflow-hidden gap-1 ${props.className ?? ""}`}>{props.children}</div>
	)
}
