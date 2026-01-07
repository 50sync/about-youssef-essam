import { IoIosArrowDown } from "react-icons/io";
import "./Home.css";
import { RiDiscordLine, RiGithubLine } from "react-icons/ri";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <div className="glow blue"></div>
      <div className="glow pink"></div>
      <div className="home-section" id="home-section">
        <div className="home-icon-wrapper">
          <div className="home-icon-pulse" />
          <div className="home-icon">{"</>"}</div>
        </div>
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
          <a
            className="home-button view-projects-button"
            href="#projects-section"
          >
            View Projects
          </a>
        </div>
        <div className="links">
          <a href="https://github.com/50sync" target="_blank">
            <RiGithubLine />
          </a>
          <a
            href="https://www.linkedin.com/in/youssef-essam-flutter/"
            target="_blank"
          >
            <AiOutlineLinkedin />
          </a>
          <a
            href="https://discord.com/users/716052671408373841"
            target="_blank"
          >
            <RiDiscordLine />
          </a>
        </div>
        <a href="#skills-section" className="arrow-down">
          <IoIosArrowDown />
        </a>
      </div>
    </>
  );
}
