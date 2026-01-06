import type { ReactNode } from "react";
import "./SkillContainer.css";
type SkillModel = {
  icon: ReactNode;
  name: string;
  description: string;
  skills: string[];
};

type SkillProps = {
  skill: SkillModel;
};

export default function SkillContainer({ skill }: SkillProps) {
  return (
    <>
      <div className="skill-container container-default-style">
        <div className="skill-icon">{skill.icon}</div>
        <h3 className="skill-title">{skill.name}</h3>
        <h3 className="skill-description">{skill.description}</h3>
        <div className="skills-row">
          {skill.skills.map((skill) => (
            <div className="skill-item">{skill}</div>
          ))}
        </div>
      </div>
    </>
  );
}
