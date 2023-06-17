import React from 'react';
import Number from '../../atoms/Number';
import decor from '../../../assets/images/icons/3.svg';
import { Button, Title } from '../../atoms';
import Text from '../../atoms/Text';

export default function SectionBlog() {
  return (
    <section className="blog container-margin">
      <div className="container">
        <div className="blog__top flex justify-between">
          <Number className="blog__top-decor" content={decor} w="180" />
          <div className="blog__top-desc-wrapper">
            <Title size="h2" text="Blog" className="blog__top-title mb-lg md:mb-[63px]" />
            <Text
              size="m"
              text="The pouch comes with plant fiber filling and is tobacco free, to avoid staining your teeth and bring dripping to a minimum. While the low amount of drip makes the release of nicotine and flavor extended, to it’s limits."
            />
          </div>
        </div>
        <Button
          className="blog__btn uppercase text-center"
          href="#"
          size="l"
          variant="ghost-1"
          text="all PRODUCTS"
        />
      </div>
    </section>
  );
}
