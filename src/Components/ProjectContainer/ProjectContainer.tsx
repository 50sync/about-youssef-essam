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
      <div className="project-container container-default-style">
        <div className="project-img-wrapper">
          <img className="project-img" src={project.img} alt="" />
        </div>
        <div className="project-details">
          <div className="project-title">{project.title}</div>
          <div className="project-description">{project.description}</div>
          <div className="project-technologies">
            {project.technologies.map((technology) => (
              <div className="project-technology">{technology}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
