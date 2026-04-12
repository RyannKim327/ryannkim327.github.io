import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import { projects } from "../../utils/interfaces";
import { useEffect, useState } from "react";
import { get } from "../../utils/api";
import { toast } from "react-toastify";

export default function FeedbackPage() {
	const navigate = useNavigate()
	const [lists, setProjects] = useState<projects[]>([])

	useEffect(() => {
		(async () => {
			const api = await get("projects");
			if (api.error) {
				return toast(api.error);
			}
			const programs = api.data.projects.sort((a: projects, b: projects) =>
				a.name.localeCompare(b.name),
			);
			setProjects(programs);
		})();
	}, []);


	return (
		<div className="flex flex-col w-full h-full select-none">
			<div className="flex flex-col justify-center w-full gap-3 border-b border-b-black dark:border-b-white border-b-solid px-3 py-2">
				<div className="flex">
					<div
						onClick={() => navigate("/")}
						className="flex w-full items-center gap-2 cursor-pointer"
					>
						<FontAwesomeIcon icon={faLongArrowLeft} />
						<h1 className="text-[1.5rem] underline">Send Feedback from my Projects</h1>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center h-full w-full">
				<div className="flex flex-col p-2 border-red-50 border border-solid gap-2">
					<div className="flex gap-2 border-white border border-solid p-1">
						<label htmlFor="" className="w-[calc(40%-0.5rem)]">Full name</label>
						<input className="w-full px-1 outline-none" />
					</div>
					<div className="flex gap-2 border-white border border-solid p-1">
						<label className="w-[calc(40%-0.5rem)]">Project Lists</label>
						<select name="" id="" className="w-full px-1">
							{lists.map((proj: projects) => {
								return <option value="">{proj.name}</option>
							})}
						</select>
					</div>
					<textarea name="" id="" className="border-white border border-solid resize-none h-[10rem] outline-none p-1"></textarea>
				</div>
			</div>
		</div>
	)
}
