import HeroGradient from "../components/HeroGradient";
import DesignGallery from "../components/DesignGallery";
import ClientsMarquee from "../components/ClientsMarquee";
import SectionDivider from "../components/SectionDivider";

const Home = () => {
  return (
    <>
      <HeroGradient />
      <DesignGallery />
      <SectionDivider  height="h-[100px]" />
      
      <ClientsMarquee />
  
    </>
    
  );
};

export default Home;
