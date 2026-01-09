import { CiMenuBurger } from "react-icons/ci";
import "./NavBar.css";
import { NAV_LINKS } from "../../Router/navigation_links";
import TypingAnimatedText from "../../utils/typingAnimatedText";

type NavBarProps = {
  onToggleSidebar: () => void;
};

export default function NavBar({ onToggleSidebar }: NavBarProps) {
  return (
    <>
      <nav>
        <div className="logo">
          <div className="typing-text">
            <TypingAnimatedText />
          </div>
        </div>
        <div className="nav-items">
          <div className="nav-links">
            {NAV_LINKS.map((link, index) => (
              <a key={index} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <a className="toggle-sidebar-button" onClick={onToggleSidebar}>
            <CiMenuBurger />
          </a>
        </div>
      </nav>
    </>
  );
}
