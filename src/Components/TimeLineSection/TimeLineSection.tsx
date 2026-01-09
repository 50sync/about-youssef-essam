import TimeLineExperience from "../TimeLineExperience/TimeLineExperience";
import "./TimeLineSection.css";

const experienceList = [
  {
    jobTitle: "Flutter Developer",
    companyName: "BytesWay",
    jobDescription:
      "Developed and maintained multiple mobile applications. Collaborated with design teams to implement pixel-perfect UI and enhance user experience. Successfully launched 2+ applications across iOS and Android",
    jobSkills: ["Flutter", "Dart", "GetX", "Rest API", "BloC"],
    achivements: ["Developed and published 2 flutter apps"],
  },
];

export default function TimeLineSection() {
  return (
    <>
      <div className="experience-section section-style" id="experience-section">
        <div className="experience-title-description-column">
          <div className="experience-title section-title">
            Experience & Education
          </div>
          <div className="experience-description section-description">
            Professional journey and academic background in mobile and web
            development
          </div>
        </div>
        <div className="experiences">
          {experienceList.map((experience,index) => (
            <TimeLineExperience key={index} experience={experience} />
          ))}
        </div>
      </div>
    </>
  );
}
