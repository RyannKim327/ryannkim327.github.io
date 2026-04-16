import {
  experience,
  exp_interface,
  pages_interface,
} from "../utils/interfaces";
import { useEffect, useState } from "react";
import { get } from "../utils/api";
import { toast, ToastContainer } from "react-toastify";
import Card from "../components/card";

const InformationMed = (props: exp_interface) => {
  return (
    <div className="flex flex-row w-full p-3 gap-2 justify-end">
      <div
        className={`translate-y-1/2 bg-slate-300 border-slate-600 dark:bg-slate-900 dark:border-slate-100 border-2 w-10 h-10 rounded-full flex items-center justify-center `}
      >
        <i className={`text-slate-600 dark:text-slate-100 ${props.icon}`}></i>
      </div>
      <Card className="p-2">
        <h2 className="text-slate-600 dark:text-slate-100 font-bold text-[0.8rem]">
          {props.year}
        </h2>
        <h3 className="text-slate-900 dark:text-slate-300 text-[1rem] font-semibold">{props.title}</h3>
        <ul className="text-sm mt-2 list-disc list-inside">
          {props.children.map((c, i) => (
            <li key={i} className="text-slate-900 dark:text-slate-100 text-[0.75rem]">
              {c}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

// const InformationLarge = (props: exp_interface) => {
//   return (
//     <div
//       className={`hidden lg:flex w-full ${props.even ? "justify-start" : "justify-end"} items-start py-6`}
//     >
//       {/* Left side */}
//       {props.even && (
//         <div className="flex justify-end w-1/2 pr-6">
//           <div className="bg-slate-300 border-slate-900 text-black dark:bg-slate-900 border dark:border-slate-500 dark:border-solid dark:text-white p-4 rounded-lg w-4/5">
//             <h2 className="text-black dark:text-[#fffafa] font-bold text-end">
//               {props.year}
//             </h2>
//             <h3 className="text-lg font-semibold text-end">{props.title}</h3>
//             <ul className="text-sm mt-2 list-disc list-inside">
//               {props.children.map((c, i) => (
//                 <li key={i}>{c}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//
//       {/* Timeline icon */}
//       <div
//         className={`${props.even ? "-translate-x-1/2" : "translate-x-1/2"} translate-y-1/2 bg-white border-2 border-[#242526] w-10 h-10 rounded-full flex items-center justify-center `}
//       >
//         <i className={`text-[#242526] ${props.icon}`}></i>
//       </div>
//
//       {/* Right side */}
//       {!props.even && (
//         <div className="flex justify-start w-1/2 pl-6">
//           <div className="bg-slate-300 border-slate-900 text-black dark:bg-slate-900 border dark:border-slate-500 dark:border-solid dark:text-white p-4 rounded-lg w-4/5">
//             <h2 className="text-black dark:text-[#fffafa] font-bold">
//               {props.year}
//             </h2>
//             <h3 className="text-lg font-semibold">{props.title}</h3>
//             <ul className="text-sm mt-2 list-disc list-inside">
//               {props.children.map((c, i) => (
//                 <li key={i}>{c}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

export default function Experiences(props: pages_interface) {
  const [exp, setExp] = useState<exp_interface[]>([]);

  useEffect(() => {
    (async () => {
      const experiences = await get("experiences");
      if (experiences.message) {
        const data = experiences.data;
        data.sort((a: exp_interface, b: exp_interface) => {
          return b.year - a.year;
        });
        setExp(data);
      } else {
        toast(experiences.error);
      }
    })();
  }, []);

  return (
    <div
      id={props.id}
      className={`${props.className} flex flex-col w-full md:h-full md:overflow-hidden`}
    >
      {/* <h1 className="text-base lg:text-2xl">About</h1> */}
      <div className="flex flex-col w-full md:h-full md:overflow-y-auto box-border">
        <div className="w-full box-border">
          {exp.length > 0 ? (
            exp.map((item: experience, i: number) => {
              return (
                <>
                  <InformationMed
                    title={item.title}
                    year={item.year}
                    icon={item.icon}
                    even={i % 2 == 0}
                  >
                    {item.content ?? []}
                  </InformationMed>
                  {/* <InformationLarge */}
                  {/*   title={item.title} */}
                  {/*   year={item.year} */}
                  {/*   icon={item.icon} */}
                  {/*   even={i % 2 == 0} */}
                  {/* > */}
                  {/*   {item.content ?? []} */}
                  {/* </InformationLarge> */}
                </>
              );
            })
          ) : (
            <div className="flex flex-col h-full w-full items-center text-center justify-center gap-3">
              <p className="text-[2rem]">Please wait for a moment</p>
              <p className="text-[1.25rem]">Backend is currently loading</p>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
