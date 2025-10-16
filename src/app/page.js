import About from "@/components/About";
import Banner from "@/components/Banner";
import Education from "@/components/Education";
import Project from "@/components/Project";
import Skills from "@/components/Skill";

const page = () => {
  return (
    <div>
      <Banner />

      <About></About>
      <Project></Project>
      <Skills></Skills>
      {/* <WhatIDo></WhatIDo> */}
      <Education></Education>
    </div>
  );
};

export default page;
