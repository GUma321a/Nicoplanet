import React from 'react';
import { Title } from '../../atoms';
import { brands } from './data';
import Carousel from '../../molecules/Carousel';

export default function SectionPartners() {
  return (
    <section className="partners container-padding" id="partners">
      <div className="container">
        <Title className="partners__title text-center mb-md md:mb-xxl" size="h3" text="partners" />
        <div className="partners__slider">
          <Carousel content={brands} perPage={4} />
        </div>
      </div>
    </section>
  );
}
