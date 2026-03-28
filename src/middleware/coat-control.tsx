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

	if (devtoolsOpen) {
		return (
			<div className="flex flex-col items-center justify-center text-black dark:bg-slate-950 bg-[#f9fafb] dark:text-white w-dvw h-dvh select-none">
				Initiating Project
			</div>
		);
	}

	return <>{children}</>;
}
