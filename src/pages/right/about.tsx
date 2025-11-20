import {
  faJava,
  faLinux,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassStart } from "@fortawesome/free-solid-svg-icons/faHourglassStart";
import {
  faArrowLeft,
  faArrowRight,
  faCog,
  faComments,
  faDatabase,
  faLock,
  faViruses,
  faRobot,
  faTools
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

interface abt {
  title: string;
  year: number;
  icon: IconDefinition;
  content: string[];
}

const experience: abt[] = [
  {
    title: "Beginner's Path",
    year: 2016,
    icon: faHourglassStart,
    content: [
      "First step and journey to HTML",
      "Initiated to Learn the Basics of Python Programming",
      "Get confused how to access to the internet",
    ],
  },
  {
    title: "Android Modification Era",
    year: 2017,
    icon: faCog,
    content: [
      "Grinding with Smali and XML for android modification",
      "Started to learn how to reconfigure an application",
      "Exploring the fundamentals of Web Development",
      "Game cheating and resources modification",
      "Learn more about Python 2",
      "Mentorship about android modification",
    ],
  },
  {
    title: "Android Development Era",
    year: 2018,
    icon: faJava,
    content: [
      "Initiated to learn about the Android Development",
      "Released my first android application (web view)",
      "Initiated to practice Cascadinf Style Sheet for web designing",
    ],
  },
  {
    title: "Road to backend",
    year: 2019,
    icon: faDatabase,
    content: [
      "Started to learn MySQL database and PHP",
      "Started to use Javascript in web behaviour",
      "Learn how to create desktop application (executable)",
    ],
  },
  {
    title: "Grinding in Era of Pandemia",
    year: 2020,
    icon: faViruses,
    content: [
      "Initiated to Develop Sulat Baybayin [Text editor with keyboard]",
      "Initiated to Develop Sulat Baybayin Website",
      "Initiation and Released of El Filibusterismo",
      "Released of my First Forum Website",
    ],
  },
  {
    title: "Let's have a talk",
    year: 2021,
    icon: faComments,
    content: [
      "Joined in IT Groups and Communities",
      "Enhancement of Communication Skills",
      "Collaboration by mentoring with different students",
      "Initiation of Development for Front-end Editor",
      "Applied for an Internship Job",
    ],
  },
  {
    title: "Road to AI and Automation [I Shall Return]",
    year: 2022,
    icon: faRobot,
    content: [
      "Last released of Front-end Editor",
      "Started to create a facebook bot",
      "Grinding in Javascript and NodeJS",
      "Created my first NPM Project with Lester Navarra",
      "Learned the basics of Web Scraping",
      "Learned how to use RestAPI",
      "Connect Front-end Editor into its backend",
      "Go back to college",
      "Started my Goal to a day commit challenge",
      "Learned how to read Documentation",
    ],
  },
  {
    title: "Escape from my Comfort Zone",
    year: 2023,
    icon: faLinux,
    content: [
      "Started to use Linux Distro in Virtual Machines, also in dual boot",
      "Use Linux Distro [Debian based and Arch Linux based distro] as primary OS on my device",
      "Started to study Django",
      "Troubleshoot in Distro installation [POP! OS]",
      "Started to learn ReactJS",
      "Initiation Project AI Haibara [Android AI Application]",
      "Participated in Hack4Gov 2 2023",
    ],
  },
  {
    title: "Redevelopment",
    year: 2024,
    icon: faTools,
    content: [
      "Creation of VCard and Portfolio",
      "Studying Typescript and Javascript with ReactJS",
      "Studying the use of Vite x ReactJS",
      "Installation of Arch based Distro and Desktop Environment",
      "Working in a multi-collaborator school project",
      "Participated in Hack4Gov 3 2024",
    ],
  },
  {
    title: "Diving into the Security",
    year: 2025,
    icon: faLock,
    content: [
      "IT Paradigm Cybersecurity Team Leader",
      "Participated in OpenIT Hackathon (July 2025)",
      "Participated in OpenIT Hackathon (November 2025)",
      "Exploring the different system vulnerabilities",
      "Participated in 2025 PSA DataFest",
      "Having multi-collaborator project with other students",
      "Head Developer of DLL TapIn",
    ],
  },
];

export default function RightAbout() {
  const [current, setCurrent] = useState(0);
  const [exp, setExp] = useState<abt>(experience[current]);

  useEffect(() => {
    const looper = setInterval(() => {
      nav()
    }, 5000)
    return clearInterval(looper)
  }, [])

  const nav = (n = true) => {
    let current_ = current;
    if (n) {
      // TODO: Next
      current_++;
    } else {
      current_--;
    }
    if (current_ < 0) {
      current_ = experience.length - 1;
    }
    if (current_ >= experience.length) {
      current_ = 0;
    }
    setCurrent(current_);
    setExp(experience[current_]);
  };

  return (
    <div className="flex flex-row w-full h-full p-2 py-6 items-center gap-2 select-none">
      <FontAwesomeIcon onClick={() => nav(false)} icon={faArrowLeft} />
      <fieldset className="border border-[#c4a7e7] border-solid p-2 rounded w-full h-full ">
        <legend className="flex gap-2 items-center border border-[#c4a7e7] border-solid p-2 rounded ml-[25px]">
          <FontAwesomeIcon icon={exp.icon} />
          <span>{exp.title}</span>
          <span className="text-[10px]">{exp.year}</span>
        </legend>
        <blockquote className="h-full">
          <ol className="flex flex-col justify-center h-full gap-2 list-none">
            {exp.content.map((con, i) => {
              return (
                <li>
                  {i + 1}. {con}
                </li>
              );
            })}
          </ol>
        </blockquote>
      </fieldset>
      <FontAwesomeIcon onClick={() => nav()} icon={faArrowRight} />
    </div>
  );
}
