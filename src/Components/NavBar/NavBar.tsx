import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <nav>
        <div className="logo">
          <p>{"<Dev/>"}</p>
        </div>
        <div className="nav-links">
          <a href="#home-section">HOME</a>
          <a href="#skills-section">SKILLS</a>
          <a>PROJECTS</a>
          <a>EXPERIENCE</a>
          <a>CONTACT</a>
        </div>
      </nav>
    </>
  );
}
