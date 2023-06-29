import React from 'react';
import { Title } from '../../atoms';
import Brands from '../../molecules/Brands';
import { brands } from './data';
import Carousel from '../../molecules/Carousel';

export default function SectionPartners() {
  return (
    <section className="partners container-padding">
      <div className="container">
        <Title className="partners__title text-center mb-md md:mb-xxl" size="h3" text="partners" />
        {/* <Brands content={brands} /> */}
        <div className="partners__slider max-h-[500px] max-w-[500px]">
          <Carousel content={brands} />
        </div>
      </div>
    </section>
  );
}
