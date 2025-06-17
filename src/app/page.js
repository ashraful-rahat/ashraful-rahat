import About from '@/components/About';
import Banner from '@/components/Banner';
import Skills from '@/components/Skill';
import WhatIDo from '@/components/WhatIDo';


import React from 'react';

const page = () => {
  return (
    <div>
    
      <Banner />

      <About></About>
  <Skills></Skills>
  <WhatIDo></WhatIDo>
    </div>
  );
};

export default page;
