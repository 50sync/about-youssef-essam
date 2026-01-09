import Tag from "../Tag/Tag";
import "./ProjectContainer.css";

type projectModel = {
  img: string;
  title: string;
  description: string;
  technologies: string[];
  linkToRepo: string;
};

type projectProps = {
  project: projectModel;
};

export default function Project({ project }: projectProps) {
  return (
    <>
      <div className="project-container container-style">
        <div className="project-img-wrapper">
          <img className="project-img" src={project.img} alt="" />
          <img className="project-icon" src={project.img} alt="" />
        </div>
        <div className="project-details">
          <div className="project-title">{project.title}</div>
          <div className="project-description">{project.description}</div>
          <div className="project-technologies">
            {project.technologies.map((technology, index) => (
              <Tag key={index} label={technology} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
