import { useEffect, useState } from "react";
import API from "../../utils/api";
import { projects } from "../../utils/interfaces";

export default function RightProjects(){
    const [categories, setCategories] = useState<string[]>([]);
    const [listProjects, setListProjects] = useState<projects[]>([]);
    const [projects, setProjects] = useState<projects[]>([]);
    const [category, setCategory] = useState("all");
    
    useEffect(() => {
        (async () => {
            const api = await API();
            setCategories(["all", ...api.categories]);
            const programs = api.projects.sort((a, b) =>
            a.name.localeCompare(b.name),
            );
            setListProjects(programs);
            if (category && category !== "all") {
            setProjects(
                programs.filter((program) =>
                program.category.includes(category.toLowerCase()),
                ),
            );
            } else {
            setProjects(programs);
            }
        })();
    }, []);

    useEffect(() => {
        if (category && category !== "all") {
            setProjects(
            listProjects.filter((project) =>
                project.category.includes(category.toLowerCase()),
            ),
            );
        } else {
            setProjects(listProjects);
        }
    }, [category]);

    return (
        <div className="flex flex-col w-full h-full p-2">
            {
                projects.length > 0 ? (
                    <div className="h-9/10">
                        <div className="flex w-full gap-2 box-border overflow-x-auto">
                            {categories.map((category_) => {
                                return (
                                    <span
                                        onClick={() => {
                                            setCategory(category_.toLowerCase());
                                        }}
                                        className={`${category_ === category ? "bg-[#ea9a97]" : "bg-[#6e6a86]"} w-full text-center select-none px-2 rounded-md cursor-pointer`}
                                    >
                                        {category_[0].toUpperCase() + category_.substring(1)}
                                    </span>
                                );
                            })}
                        </div>
                        <div className="flex flex-wrap justify-center gap-2 w-full h-full box-border pb-4 flex-1 overflow-y-scroll items-center">
                                {projects.length <= 0 ? (
                                <p>
                                    No Projects included with "
                                    {category[0].toUpperCase() + category.substring(1).toLowerCase()}"
                                    yet.
                                </p>
                            ) : (
                                projects.map((item) => {
                                    return (
                                        <div
                                            onClick={() => {
                                            const w = window.open(item.link);
                                                if (w) w.focus();
                                            }}
                                            style={{
                                                backgroundImage: `url(${item.src ?? ""})`,
                                            }}
                                            className={`flex flex-row w-1/4 h-1/5 justify-between bg-slate-900 text-white lg:grayscale hover:grayscale-0 bg-center bg-cover bg-no-repeat box-border overflow-hidden rounded transition ease-all delay-150`}
                                        >
                                            <span className="flex flex-col bg-[#6e6a86]/50 w-full h-full select-none cursor-pointer hover:underline justify-center items-center box-border">
                                                <h1 className="text-base text-center">
                                                    <span>{item.name}</span>
                                                </h1>
                                                <h3 className="text-xs text-center line-clamp-2">
                                                    {item.description?.slice(0, 100) ?? "No description applied"}
                                                </h3>
                                            </span>
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </div>
                ) : <h1>No Projects attached</h1>
            }
        </div>
    )
}