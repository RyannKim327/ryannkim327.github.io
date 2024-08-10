import SetTitle from "../utils/title";
import avd from "../assets/projects/avd-ext.png";
import ai from "../assets/projects/aria-bot.png";

const Projects = () => {
  SetTitle("My Flex Projects", "projects");
  return (
    <div className="projects">
      <div className="">
        <img src={avd} alt="Audio Video Downloader" />
      </div>
    </div>
  );
};

export default Projects;
