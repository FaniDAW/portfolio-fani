import React from "react";
import DesignGallery from "../components/DesignGallery";
import SectionDivider from "../components/SectionDivider";

/*
  Página Home
*/

const Design: React.FC = () => {
  return (
    <main>
      {/* Hero gallery animada */}
      <DesignGallery />
      <SectionDivider />
    </main>
  );
};

export default Design;
