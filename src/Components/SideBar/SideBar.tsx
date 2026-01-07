import { NAV_LINKS } from "../../Router/navigation_links";
import "./SideBar.css";

type sideBarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SideBar({ isOpen, onClose }: sideBarProps) {
  return (
    <aside className={`side-bar ${isOpen ? "side-bar-open" : ""}`}>
      <div className="side-bar-content">
        <div className="close-side-bar-button" onClick={onClose}>
          X
        </div>
        <div className="links-column">
          {NAV_LINKS.map((link) => (
            <a href={link.href} onClick={onClose}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
