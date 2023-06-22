import React from 'react';
import { Title } from '../../atoms';
import Brands from '../../molecules/Brands';
import { brands } from './data';

export default function SectionPartners() {
  return (
    <section className="partners container-padding">
      <div className="container">
        <Title className="partners__title text-center mb-md md:mb-xxl" size="h3" text="partners" />
        <Brands content={brands} />
      </div>
    </section>
  );
}
