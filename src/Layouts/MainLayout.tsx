import NavBar from "../Components/NavBar/NavBar";
import Home from "../Components/Home/Home";
import SkillsSection from "../Components/SkillsSection/SkillsSection";
import ProjectsSection from "../Components/ProjectsSection/ProjectsSection";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <div className="main-layout">
        <Home />
        <SkillsSection />
        <ProjectsSection />
      </div>
    </>
  );
}
