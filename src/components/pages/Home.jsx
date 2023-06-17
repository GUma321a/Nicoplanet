import React from 'react';
import SectionHero from '../organisms/SectionHero/SectionHero';
import Social from '../molecules/Social';
import SectionInfo from '../organisms/SectionInfo';
import SectionProduct from '../organisms/SectionProduct';
import SectionFeedback from '../organisms/SectionFeedback';
import SectionAbout from '../organisms/SevtionAbout';
import SectionBlog from '../organisms/SectionBlog';
import SectionPartners from '../organisms/SectionPartners';

function Home() {
  return (
    <div className="relative">
      <Social wrapperClass="absolute top-[50px] flex flex-col" className="mt-md" />
      <SectionHero />
      <SectionInfo />
      <SectionProduct />
      <SectionAbout />
      <SectionBlog />
      <SectionPartners />
      <SectionFeedback />
    </div>
  );
}

export default Home;
