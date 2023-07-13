import React from 'react';

import number from '../../../assets/images/icons/2.svg';
import decor from '../../../assets/images/decor/about-decor.png';
import { Button, Title, Number, Image, Text } from '../../atoms';

export default function SectionAbout() {
  return (
    <section className="about container-padding relative" id="about">
      <div className="container">
        <div className="about__wrapper flex justify-between">
          <div className="about__info flex-50">
            <Title text="about nicoplanet" size="h2" className="mb-lg md:mb-xxl" />
            <Text
              size="m"
              className="mb-lg md:mb-[90px]"
              text="The company Nico Planet is engaged in the production of nicotine products of the highest quality. We deliver products to customers as quickly as possible with no order minimum. All of our products have a pronounced taste, retain optimal humidity, and are produced under strict control on our high precision equipment. We are excited to work with you!"
            />
            <Button text="Contacts" link="#contact" variant="ghost-1" size="l" />
          </div>
          <Number className="about__number" content={number} />
          <div className="as absolute -z-10">
            <Image src={decor} />
          </div>
        </div>
      </div>
    </section>
  );
}
