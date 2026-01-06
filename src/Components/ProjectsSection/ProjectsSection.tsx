import Project from "../ProjectContainer/ProjectContainer";
import "./ProjectsSection.css";

const projectsList = [
  {
    img: "https://placehold.co/600x400",
    title: "Test",
    description: "lorem ipsum dolor sit amet",
    technologies: ["Flutter", "React Native", "React"],
    linkToRepo: "https://placehold.co/600x400",
  },
  {
    img: "https://placehold.co/600x400",
    title: "Test",
    description: "lorem ipsum dolor sit amet",
    technologies: ["Flutter", "React Native", "React"],
    linkToRepo: "https://placehold.co/600x400",
  },
  
];

export default function ProjectsSection() {
  return (
    <>
      <div className="projects section-default-style">
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
