import AboutSection from "./components/AboutSection";
import Hero from "./components/Hero";
import ProjectSections from "./components/ProjectSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ProjectSections />
    </main>
  );
}
