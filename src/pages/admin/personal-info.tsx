interface headerprops {
  name: string;
}
const Header = ({ name }: headerprops) => {
  return (
    <div className="flex flex-row items-center gap-1">
      <span className="font-mono tracking-[0.33rem] text-[0.66em]">
        {name.toUpperCase()}
      </span>
      <div className="flex w-full bg-green-300 p-[1px]"></div>
    </div>
  );
};

const ExperienceElement = () => {
  return (
    <div>
      <span>Text</span>
    </div>
  );
};

export default function PersonalInfo() {
  return (
    <div className="flex flex-col md:flex-row gap-2 w-full h-full">
      <div className="w-[calc(40%-0.5rem)] ">side A</div>
      <div className="w-[calc(60%-0.5rem)] ">
        <span>Preview</span>
        <div className="flex flex-col bg-white text-black aspect-[210/297]">
          <div className="flex flex-row items-center justify-between p-2">
            <div className="flex items-center gap-2">
              <img className="w-15 bg-red-50 aspect-square" src="" alt="Pic" />
              <div className="flex flex-col max-w-2/3">
                <span className="font-serif">Ryann Kim M. Sesgundo</span>
                <span className="font-stretch-semi-condensed text-[0.75rem] tracking-[0.25rem]">
                  A Multi-Stack Developer
                </span>
              </div>
            </div>
            <div className="flex flex-col font-serif italic">
              <span>email@gmail.com</span>
              <span>09123456789</span>
              <span>Lucena City</span>
            </div>
          </div>
          <div className="flex flex-row border-t w-full border-black border-solid h-full">
            <div className="flex flex-col p-3 w-full gap-3">
              <p className="italic text-sm text-justify font-serif border-l-2 border-green-300 border-solid p-2 pl-3">
                A full-stack developer with years of experience in different
                field such as Web Development and Mobile Development. With full
                compassion and dedication on work gained from being student
                assistant.
              </p>
              <Header name="experience" />
              <div>
                <span>Android Development</span>
              </div>
            </div>
            <div className="flex flex-col bg-gray-200 border-l border-black border-solid p-3 w-[calc(50%-0.5rem)] gap-3">
              <Header name="Skills" />
              <ul className="flex flex-col gap-1 text-[0.66rem]">
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
      </div>
    </div>
  );
}
