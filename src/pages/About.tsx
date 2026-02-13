import AboutSection from "../components/AboutSection";
import Timeline from "../components/Timeline";
import SectionDivider from "../components/SectionDivider";


function About() {
  return (
    <>
      {/* texto sobre mi */}
      
      <AboutSection />

      {/* experiencia profesional */}
      <Timeline />
      
      <SectionDivider  height="h-[200px]" />

    </>
  );
}

export default About;
