import { IoIosArrowDown } from "react-icons/io";
import { BsDiscord, BsGithub, BsLinkedin } from "react-icons/bs";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="home-section" id="home-section">
        <div className="home-icon">{"</>"}</div>
        <div className="welcome-text">
          Hi, i'm <span className="welcome-name">Youssef Essam</span>
        </div>
        <div className="title">Cross-Platform Mobile Developer</div>
        <div className="description">
          <h2>
            Specialized in building beautiful, high-performance mobile
            applications with Flutter, React Native, and React. I create
            seamless experiences that work across iOS, Android, and Web
            platforms.
          </h2>
        </div>
        <div className="buttons-row">
          <button className="home-button get-in-touch-button">
            Get in touch
          </button>
          <button className="home-button view-projects-button">
            View Projects
          </button>
        </div>
        <div className="links">
          <a href="https://github.com/50sync" target="_blank">
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/youssef-essam-flutter/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://discord.com/users/716052671408373841"
            target="_blank"
          >
            <BsDiscord />
          </a>
        </div>
        <a href="#skills-section" className="arrow-down">
          <IoIosArrowDown />
        </a>
      </div>
    </>
  );
}
