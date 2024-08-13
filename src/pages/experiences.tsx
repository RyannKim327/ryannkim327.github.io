import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import {
  faServer,
  faGear,
  faStairs,
  faVirus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import SetTitle from "../utils/title";

const divs = (icon: IconProp, title: string, year: number, exp: string[]) => {
  const styles = {
    boxShadow:
      "3px 3px 5px rgba(0, 0, 0, 0.5), 3px 3px 5px inset rgba(255, 255, 255, 0.1)",
  };
  return (
    <div className="flex flex-rows items-start w-full box-border m-2">
      <div className="flex flex-rows items-center w-1/3">
        <FontAwesomeIcon
          style={styles}
          className="text-3xl p-4 border-solid aspect-square border-white border-2 rounded-md shadow"
          icon={icon ?? ""}
        />
        <div className="flex flex-col m-2">
          <h1>{title}</h1>
          <h3>{year}</h3>
        </div>
      </div>
      <div className="flex flex-col">
        {exp.map((str) => {
          return <p>{str}</p>;
        })}
      </div>
    </div>
  );
};

const Experiences = () => {
  SetTitle("My Experiences", "experiences");
  return (
    <motion.div
      initial={{
        boxSizing: "border-box",
        marginTop: "100%",
        position: "absolute",
      }}
      animate={{
        marginTop: 0,
      }}
      className="w-4/6 box-border flex flex-col overflow-scroll"
    >
      {divs(faStairs, "Where everything starts", 2016, [
        "First step to HTML",
        "Initiated to Learn the basics of Python Programming",
        "Get confused how to access to the internet",
      ])}
      {divs(faGear, "Android Modification", 2017, [
        "Griding with Smali and XML for android modification",
        "Started to learn how to reconfigure an application",
        "Exploring the fundamentals of web development",
        "Game cheating and resource modification",
        "Learn more about Python 2",
        "Mentorship about android modification",
      ])}
      {divs(faJava, "Android Development", 2018, [
        "Initiated to learn about android development",
        "Released my first android application (web view)",
        "Initiated to practice Cascading Style Sheet for web designs",
      ])}
      {divs(faServer, "Road to backend", 2019, [
        "Initiated to learn MySQL and PHP",
        "Started to learn the fundamentals of Javascript",
        "Learned how to create a desktop application with Java",
      ])}
      {divs(faVirus, "Griding in Pandemic Era", 2020, [])}
    </motion.div>
  );
};

export default Experiences;
