import { CiMenuBurger } from "react-icons/ci";
import "./NavBar.css";
import { NAV_LINKS } from "../../Router/navigation_links";

type NavBarProps = {
  onToggleSidebar: () => void;
};

export default function NavBar({ onToggleSidebar }: NavBarProps) {
  return (
    <>
      <nav>
        <div className="logo">
          <p>{"Youssef Essam"}</p>
        </div>
        <div className="nav-items">
          <div className="nav-links">
            {NAV_LINKS.map((link) => (
              <a href={link.href}>{link.label}</a>
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
