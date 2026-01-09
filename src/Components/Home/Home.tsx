import { IoIosArrowDown } from "react-icons/io";
import "./Home.css";
import { RiDiscordLine, RiGithubLine } from "react-icons/ri";
import { AiOutlineLinkedin } from "react-icons/ai";
import myImg from "../../assets/me.png";

export default function Home() {
  return (
    <>
      <div className="home-section" id="home-section">
       
        <div className="home-content">
          <div className="home-icon-wrapper">
            <div className="home-icon-pulse" />
            <div className="home-icon">
              <img src={myImg} />
            </div>
          </div>
          <div className="home-welcome-text">
            Hi, i'm <span className="home-welcome-name">Youssef Essam</span>
          </div>
          <div className="home-title">Cross-Platform Mobile Developer</div>
          <div className="home-description">
            <h2>
              Specialized in building beautiful, high-performance mobile
              applications with Flutter, React Native, and React. I create
              seamless experiences that work across iOS, Android, and Web
              platforms.
            </h2>
          </div>
          <div className="home-buttons-row">
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
          <div className="home-links">
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
      </div>
    </>
  );
}
