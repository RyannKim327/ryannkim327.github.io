import Profile from "./../assets/light.png";

interface headerprops {
  name: string;
}

interface experienceProps {
  year: number;
  titles: string[];
}

type MergedExperience = {
  year: number;
  titles: string[];
};

const Header = ({ name }: headerprops) => {
  return (
    <div className="flex flex-row items-center gap-1">
      <span className="font-mono tracking-[0.33rem] text-[0.66em]">
        {name.toUpperCase()}
      </span>
      <div className="flex w-full bg-green-400 p-[1px]"></div>
    </div>
  );
};

const ExperienceElement = (props: experienceProps) => {
  return (
    <div className="flex flex-col">
      <span className="text-[0.75rem] italic font-serif font-bold">
        {props.year}
      </span>
      {props.titles.map((title) => {
        return <span className="ml-2 text-[0.90rem] font-mono">{title}</span>;
      })}
    </div>
  );
};

interface resumeProps {
  data: Record<string, any>[];
  user: Record<string, any>;
}

export default function Resume(props: resumeProps) {
  const experiences = props.data;

  const merged: MergedExperience[] = Object.values(
    experiences.reduce(
      (acc, curr) => {
        if (!acc[curr.year]) {
          acc[curr.year] = {
            year: curr.year,
            titles: [],
          };
        }

        acc[curr.year].titles.push(curr.title);
        return acc;
      },
      {} as Record<number, MergedExperience>,
    ),
  );

  return (
    <div className="flex flex-col bg-white text-black aspect-[210/297]">
      <div className="flex flex-row items-center justify-between py-1 px-4">
        <div className="flex items-center gap-2">
          <div className="w-15 aspect-square overflow-hidden rounded-full border border-solid border-black">
            <img className="w-full -mt-2" src={Profile} alt="Pic" />
          </div>
          <div className="flex flex-col max-w-2/3">
            <span className="font-serif">
              {props.user.first_name}{" "}
              {props.user.middle_name ? props.user.middle_name[0] + "." : ""}{" "}
              {props.user.last_name}
            </span>
            <span className="font-stretch-semi-condensed text-[0.75rem] tracking-[0.25rem]">
              A {props.user.position}
            </span>
          </div>
        </div>
        <div className="flex flex-col font-serif italic">
          <span>{props.user.email}</span>
          <span>{props.user.phone}</span>
          <span>{props.user.address}</span>
        </div>
      </div>
      <div className="flex flex-row border-t w-full border-black border-solid h-full">
        <div className="flex flex-col p-3 w-full gap-3">
          <p className="italic text-sm text-justify font-serif border-l-3 border-green-500 border-solid p-2 pl-3">
            {props.user.about}
          </p>
          <Header name="experience" />
          <div className="flex flex-col px-2 gap-1">
            {merged.map((exp) => {
              return <ExperienceElement year={exp.year} titles={exp.titles} />;
            })}
          </div>
        </div>
        <div className="flex flex-col bg-gray-100 border-l border-black border-solid p-3 w-[calc(50%-0.5rem)] gap-3">
          <Header name="Skills" />
          <ul className="flex flex-col gap-1 text-[0.66rem] px-1">
            <li>Project Manager</li>
            <li>
              Back-end Development
              <ul className="ml-2">
                <li>Django</li>
                <li>Flask</li>
                <li>Go GIN</li>
                <li>ExpressJS</li>
                <li>PHP</li>
              </ul>
            </li>
            <li>
              Front-end Development
              <ul className="ml-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>ReactJS</li>
              </ul>
            </li>
            <li>
              Prototype
              <ul className="ml-2">
                <li>Figma</li>
              </ul>
            </li>
            <li>
              Android Development
              <ul className="ml-2">
                <li>Java</li>
                <li>Kotlin</li>
                <li>React Native</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
