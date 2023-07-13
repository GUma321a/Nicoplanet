import React from 'react';
import { product } from './data';
import { Button, Title, Text } from '../../atoms';
import Carousel from '../../molecules/Carousel';

export default function SectionHero() {
  return (
    <section className="hero container-padding pt-0">
      <div className="container">
        <div className="hero__wrapper flex justify-between gap-md flex-col md:flex-row">
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
              link="./blogs"
              className="hero__description-button mt-md md:mt-[50px] lg:mt-[135px]"
            />
          </div>
          <div className="hero__img max-w-[500px] w-full relative mx-auto">
            <Carousel content={product} />
            <span className="bg-[#52C5D5] opacity-50 block w-full h-full rounded-[50%] absolute blur-[136px] top-0 -z-10 left-1/2 -translate-x-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
}
