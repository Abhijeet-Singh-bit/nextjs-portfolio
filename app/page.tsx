import Hero from "./components/Hero";
import Services from "./components/Services";
import ProjectsPreview from "./components/ProjectsPreview";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <ProjectsPreview />
    </main>
  );
}