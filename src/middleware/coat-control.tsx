import { ReactNode, useEffect, useState } from "react";
import { addListener, launch } from "devtools-detector";
import { get } from "../utils/api";

interface CoatProps {
	children: ReactNode;
}

export default function Coat({ children }: CoatProps) {
	const [devtoolsOpen, setDevtoolsOpen] = useState(true);

	useEffect(() => {
		(async () => {
			const res = await get("");
			if (res.message) {
				setDevtoolsOpen(false);
			}
		})();

		addListener((isOpen: boolean) => {
			// location.href = "https://google.com";
			setDevtoolsOpen(isOpen);
		});

		launch();
	}, []);

	if (!!devtoolsOpen) {
		return (
			<div className="flex flex-col absolute items-center justify-center text-black dark:bg-slate-950 bg-[#f9fafb] dark:text-white w-dvw h-dvh md:w-screen md:h-screen select-none overflow-hidden">
				<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
					<svg className="w-[22rem] h-[22rem] md:w-[30rem] md:h-[30rem] animate-spin loader-glow" viewBox="0 0 100 100">
						<circle cx="50" cy="50" fill="none" opacity="0.4" r="48" stroke="#9cff93" stroke-dasharray="1, 15" stroke-linecap="round" stroke-width="0.25"></circle>
						<circle cx="50" cy="50" fill="none" opacity="0.8" r="46" stroke="#9cff93" stroke-dasharray="60 140" stroke-linecap="round" stroke-width="0.5"></circle>
					</svg>
				</div>
				<h1 className="font-headline font-bold text-[10rem] md:text-[15rem] leading-none tracking-tighter text-primary splash-glow select-none">ᜃ</h1>
			</div>
		);
	}

	return <div className="dark:bg-slate-950 dark:text-white bg-[#f9fafb] h-dvh w-dvw md:w-screen md:h-screen select-none overflow-hidden">{children}</div>;
}
