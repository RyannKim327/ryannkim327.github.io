import {
  faJava,
  faLinux,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { pages_interface } from "../utils/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassStart } from "@fortawesome/free-solid-svg-icons/faHourglassStart";
import {
  faCog,
  faComments,
  faDatabase,
  faViruses,
} from "@fortawesome/free-solid-svg-icons";
import { faRobot } from "@fortawesome/free-solid-svg-icons/faRobot";
import { faTools } from "@fortawesome/free-solid-svg-icons/faTools";
import { useEffect, useRef } from "react";

interface about_interface {
  title: string;
  year: number;
  children: string[];
  icon: IconDefinition;
  even: boolean;
}

interface abt {
  title: string;
  year: number;
  icon: IconDefinition;
  content: string[];
}

const Information = (props: about_interface) => {
  return (
    <div className={`inline-block w-full h-full box-border p-2`}>
      <fieldset
        style={{ borderWidth: "1px", borderStyle: "solid" }}
        className={`flex flex-col border-black dark:border-white rounded w-full h-full p-4`}
      >
        <legend
          style={{ borderWidth: "1px", borderStyle: "solid" }}
          className={`px-4 py-2 rounded ml-4 border-black dark:border-white`}
        >
          <FontAwesomeIcon icon={props.icon} />
          <span className="pl-2 items-center">
            {props.title} <sub>{props.year}</sub>
          </span>
        </legend>
        <blockquote
          style={{ borderLeftWidth: "3px", borderLeftStyle: "solid" }}
          className="border-l-black dark:border-l-white pl-4"
        >
          {props.children.map((item, i) => {
            return (
              <p>
                {i + 1}. {item}
              </p>
            );
          })}
        </blockquote>
      </fieldset>
    </div>
  );
};

export default function About(props: pages_interface) {
  const scrollContainerRef = useRef(null);
  useEffect(() => {
    const current = scrollContainerRef.current;
    if (current) {
      const onWheel = (e) => {
        if (current) {
          e.preventDefaut();
          current.scrollLeft += e.deltaY;
        }
      };
      current.addEventListener("wheel", onWheel, { passive: false });
      return () => {
        current.removeEventListener("wheel", onWheel);
      };
    }
  }, []);
  const about: abt[] = [
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
      ],
    },
  ];
  return (
    <div id={props.id} className={`${props.className} overflow-hidden`}>
      <h1 className="text-base lg:text-2xl">About</h1>
      <div className="flex flex-col lg:flex-row w-full h-3/4 overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="overflow-x-scroll overflow-y-hidden w-full h-full whitespace-nowrap box-border"
        >
          {about.map((item: abt, i: number) => {
            return (
              <Information
                title={item.title}
                year={item.year}
                icon={item.icon}
                even={i % 2 == 0}
              >
                {item.content}
              </Information>
            );
          })}
        </div>
      </div>
    </div>
  );
}
