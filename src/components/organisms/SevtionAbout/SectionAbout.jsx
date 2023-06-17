import React from 'react';

import decor from '../../../assets/images/icons/2.svg';
import Number from '../../atoms/Number';
import { Button, Title } from '../../atoms';
import Text from '../../atoms/Text';

export default function SectionAbout() {
  return (
    <section className="about container-padding">
      <div className="container">
        <div className="about__wrapper flex">
          <div className="about__info">
            <Title text="about nicoplanet" size="h2" className="mb-lg md:mb-xxl" />
            <Text
              size="m"
              className="mb-lg md:mb-[90px]"
              text="The company Nico Planet is engaged in the production of nicotine products of the highest quality. We deliver products to customers as quickly as possible with no order minimum. All of our products have a pronounced taste, retain optimal humidity, and are produced under strict control on our high precision equipment. We are excited to work with you!"
            />
            <Button text="Contacts" href="#" variant="ghost-1" size="l" />
          </div>
          <div className="about__decor">
            <Number content={decor} w={271} />
          </div>
        </div>
      </div>
    </section>
  );
}
