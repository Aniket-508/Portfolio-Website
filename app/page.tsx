import Container from "@/components/layout/Container";
import ContactSection from "@/components/main/ContactSection";
import ExperienceSection from "@/components/main/ExperienceSection";
import HeroSection from "@/components/main/HeroSection";
import ProjectSection from "@/components/main/ProjectSection";

const MainView: React.FunctionComponent = () => {
  return (
    <Container className="grid grid-cols-1 border-x items-start justify-start">
      <HeroSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
    </Container>
  );
};

export default MainView;
