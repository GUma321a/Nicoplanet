import React from 'react';
import { Button, Title } from '../../atoms';
import Text from '../../atoms/Text';
import PlanetBg from '../../atoms/PlanetBg';
import decor from '../../../assets/images/decor/feedback-bg.png';

export default function SectionFeedback() {
  return (
    <section className="feedback container-padding text-center relative">
      <div className="container">
        <Title
          size="h2"
          text="DO YOU WANT TO BECOME A PARTNER OR A RESELLER OF OUR PRODUCTS?"
          className="feedback__title max-w-[965px] mx-auto mb-lg"
        />
        <Text
          size="m"
          text="The product has a small white pouch with a long-lasting flavor and can be enjoyed for up to 45 minutes."
          className="feedback__text mb-lg max-w-[470px] mx-auto"
        />
        <Button
          text="BECOME DISTRIBUTOR"
          className="feedback__btn mx-auto"
          variant="cta"
          size="l"
          link="#"
        />
        <PlanetBg bgItem={decor} className="feedback__decor" idName="feedback__decor" />
      </div>
    </section>
  );
}
