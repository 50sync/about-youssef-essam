import Project from "../ProjectContainer/ProjectContainer";
import "./ProjectsSection.css";
import xamLogo from "../../assets/projects/logo.png";
import mwslaLogo from "../../assets/projects/mwsla_app_icon.png";
import "./ProjectsSection.css";

const projectsList = [
  {
    img: xamLogo,
    title: "Xam",
    description:
      "xam is your digital/AI assistant that will be taking care of your documents, all you need is to scan all your documents, many features will easily help you organize them and you will receive reminding notification for each document renewal dates.",
    technologies: ["Flutter", "Dart", "Getx", "Rest API", "Firebase"],
    linkToRepo: "https://placehold.co/600x400",
  },
  {
    img: mwslaLogo,
    title: "Mwsla",
    description:
      "mwsla is a bus booking application for Egypt that provides safe, luxurious, and affordable transportation services. The app allows users to book comfortable premium bus travel across Egypt.",
    technologies: ["Flutter", "Dart", "BLoC", "Rest API", "Google Maps"],
    linkToRepo: "https://placehold.co/600x400",
  },
];

export default function ProjectsSection() {
  return (
    <>
      <div className="projects-section section-style" id="projects-section">
        <div className="projects-title-description-column">
          <h2 className="projects-title section-title">Featured Projects</h2>
          <h2 className="projects-description section-description">
            A showcase of recent projects demonstrating expertise in mobile and
            web development
          </h2>
        </div>
        <div className="projects-row">
          {projectsList.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}
