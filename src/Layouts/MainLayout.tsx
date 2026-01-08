import NavBar from "../Components/NavBar/NavBar";
import Home from "../Components/Home/Home";
import SkillsSection from "../Components/SkillsSection/SkillsSection";
import ProjectsSection from "../Components/ProjectsSection/ProjectsSection";
import SideBar from "../Components/SideBar/SideBar";
import { useState } from "react";
import TimeLineSection from "../Components/TimeLineSection/TimeLineSection";
import AnimatedSection from "../Components/AnimatedSection/AnimatedSection";
import ContactSection from "../Components/ContactSection/ContactSection";

export default function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <NavBar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <SideBar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div className="main-layout">
        <AnimatedSection>
          <Home />
        </AnimatedSection>
        <AnimatedSection>
          <SkillsSection />
        </AnimatedSection>
        <AnimatedSection>
          <ProjectsSection />
        </AnimatedSection>
        <AnimatedSection>
          <TimeLineSection />
        </AnimatedSection>
        <AnimatedSection>
          <ContactSection />
        </AnimatedSection>
      </div>
    </>
  );
}
