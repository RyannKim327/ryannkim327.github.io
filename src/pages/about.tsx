import { faJava, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { pages_interface } from "../utils/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassStart } from "@fortawesome/free-solid-svg-icons/faHourglassStart";
import {
  faCog,
  faCogs,
  faDatabase,
  faVirus,
  faViruses,
} from "@fortawesome/free-solid-svg-icons";

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
    <div className={`flex w-full box-border p-2 `}>
      <fieldset
        style={{ border: "1px black solid" }}
        className={`flex flex-col rounded w-full p-4`}
      >
        <legend
          style={{ border: "1px black solid" }}
          className={`px-2 rounded ml-4 `}
        >
          <FontAwesomeIcon icon={props.icon} />
          <span className="pl-2 items-center">
            {props.title} <sub>{props.year}</sub>
          </span>
        </legend>
        <blockquote style={{ borderLeft: "3px black solid" }} className="pl-4">
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
  ];
  return (
    <div id={props.id} className={`${props.className} overflow-hidden`}>
      <h1 className="text-base lg:text-2xl">About</h1>
      <div className="overflow-scroll w-full h-3/4">
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
  );
}
