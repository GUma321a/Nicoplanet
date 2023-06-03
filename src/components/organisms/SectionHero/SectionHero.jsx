import React from 'react';
import { Button, Title } from '../../atoms';
import Text from '../../atoms/Text';

export default function SectionHero() {
  return (
    <section className="hero container-padding pt-0">
      <div className="container">
        <div className="hero__wrapper flex justify-between">
          <div className="hero__description">
            <Title
              text="try all the flavors of PLanet"
              size="h1"
              className="hero__description-title"
            />
            <Text
              text="Experience the evolution in nicotine satisfaction. NICOPLANET delivers a refreshing burst of flavor and nicotine in a clean, more discreet, smokeless way"
              size="m"
              className="hero__description-text text-primary mt-md md:mt-[45px] lg:mt-[70px]"
            />
            <Button
              variant="cta"
              size="l"
              text="Read more"
              link="codemagic.com.ua"
              className="hero__description-button mt-md md:mt-[50px] lg:mt-[135px]"
            />
          </div>
          <div className="hero__img"></div>
        </div>
      </div>
    </section>
  );
}
