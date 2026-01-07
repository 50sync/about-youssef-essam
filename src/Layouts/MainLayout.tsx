import NavBar from "../Components/NavBar/NavBar";
import Home from "../Components/Home/Home";
import SkillsSection from "../Components/SkillsSection/SkillsSection";
import ProjectsSection from "../Components/ProjectsSection/ProjectsSection";
import SideBar from "../Components/SideBar/SideBar";
import { useState } from "react";

export default function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <NavBar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <SideBar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <aside className="main-layout">
        <Home />
        <SkillsSection />
        <ProjectsSection />
      </aside>
    </>
  );
}
