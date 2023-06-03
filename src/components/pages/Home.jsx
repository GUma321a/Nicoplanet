import React from 'react';
import SectionHero from '../organisms/SectionHero/SectionHero';
import Social from '../molecules/Social';
import SectionInfo from '../organisms/SectionInfo';

function Home() {
  return (
    <div className="reletive">
      <Social wrapperClass="absolute top-[50px] flex flex-col" className="mt-md" />
      <SectionHero />
      <SectionInfo />
    </div>
  );
}

export default Home;
