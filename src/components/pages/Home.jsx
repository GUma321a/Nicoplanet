import React from 'react';
import SectionHero from '../organisms/SectionHero/SectionHero';
import Social from '../molecules/Social';
import SectionInfo from '../organisms/SectionInfo';
import SectionProduct from '../organisms/SectionProduct';
import SectionFeedback from '../organisms/SectionFeedback';
import SectionAbout from '../organisms/SevtionAbout';
import SectionBlog from '../organisms/SectionBlog';
import SectionPartners from '../organisms/SectionPartners';
// import Carousel from '../molecules/Carousel';
// import ProductSlider from '../atoms/ProductSlider';
// import { product } from '../organisms/SectionHero/data';

function Home() {
  return (
    <div className="relative">
      <Social
        wrapperClass="hidden fixed top-1/2 -translate-y-1/2 flex flex-col md:flex"
        className="mt-md"
      />
      <SectionHero />
      <SectionInfo />
      <SectionProduct />
      <SectionAbout />
      <SectionBlog />
      <SectionPartners />
      <SectionFeedback />
      {/* <Carousel>
        <ProductSlider content={product} />
      </Carousel> */}
    </div>
  );
}

export default Home;
