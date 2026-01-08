import { BiMedal } from "react-icons/bi";
import "./TimeLineExperience.css";
import { MdWorkOutline } from "react-icons/md";

type TimeLineExperienceModel = {
  jobTitle: string;
  companyName: string;
  jobDescription: string;
  jobSkills: string[];
  achivements: string[];
};

type TimeLineExperienceProps = {
  experience: TimeLineExperienceModel;
};

export default function TimeLineExperience({
  experience,
}: TimeLineExperienceProps) {
  return (
    <div className="time-line-row">
      <div className="time-line-wrapper">
        <div className="time-line-start">
          <div className="time-line-start-icon">
            <MdWorkOutline />
          </div>
        </div>
        <div className="time-line-line" />
      </div>
      <div className="experience-container">
        <div className="experience-content-wrapper">
          <div className="job-title">{experience.jobTitle}</div>
          <div className="company-name">{experience.companyName}</div>
          <div className="job-description">{experience.jobDescription}</div>
          <div className="job-skills">
            {experience.jobSkills.map((skill) => (
              <div className="job-skill">{skill}</div>
            ))}
          </div>
          <div className="achivements">
            {experience.achivements.map((achivement) => (
              <div className="achievement-row">
                <BiMedal color="#50a2ff" />
                <div className="achievement">{achivement}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
