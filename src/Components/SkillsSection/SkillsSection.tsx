import { FaFlutter, FaReact } from "react-icons/fa6";
import "./SkillsSection.css";
import SkillContainer from "../SkillContainer/SkillContainer.tsx";
import { BiMobile } from "react-icons/bi";

const skillsList = [
  {
    icon: <FaFlutter />,
    name: "Flutter",
    description:
      "Building beautiful native apps with Dart and Flutter framework",
    skills: [
      "Dart",
      "Flutter Widgets",
      "State Management",
      "BLoC Pattern",
      "GetX",
    ],
  },

  {
    icon: <BiMobile />,
    name: "React Native",
    description: "Cross-platform mobile development with React Native",
    skills: [
      "React Native",
      "Expo",
      "Native Modules",
      "Redux",
      "React Navigation",
      "TypeScript",
    ],
  },

  {
    icon: <FaReact />,
    name: "React",
    description: "Modern web applications with React ecosystem",
    skills: ["React.js", "Hooks", "Tailwind CSS", "Zustand", "Redux"],
  },
  
];

export default function SkillsSection() {
  return (
    <>
      <div className="skills-section section-style" id="skills-section">
        <div className="skills-title-description-column">
          <h2 className="skills-title section-title">Skills & Expertise</h2>
          <h2 className="skills-description section-description">
            A comprehensive toolkit for building modern mobile and web
            applications
          </h2>
        </div>
        <div className="skills-row-skills">
          {skillsList.map((skill,index) => (
            <SkillContainer key={index} skill={skill} />
          ))}
        </div>
      </div>
    </>
  );
}
