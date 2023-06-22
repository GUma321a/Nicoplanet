import React from 'react';
import { blog } from './data';
import decor from '../../../assets/images/icons/3.svg';
import { Button, Title, Text, Number } from '../../atoms';
import BlogItem from '../../molecules/BlogItem';

export default function SectionBlog() {
  return (
    <section className="blog container-margin">
      <div className="container">
        {/* grid-cols-[2_minmax(900px,_1fr)_276px] */}
        {/* repeat(2, minmax(0, 1fr)) */}
        <div className="blog__top grid grid-cols-2 justify-between mb-xxl md:mb-[60px]">
          <Number className="blog__top-decor" content={decor} />
          <div className="blog__top-desc-wrapper">
            <Title size="h2" text="Blog" className="blog__top-title mb-lg md:mb-[63px]" />
            <Text
              size="m"
              text="The pouch comes with plant fiber filling and is tobacco free, to avoid staining your teeth and bring dripping to a minimum. While the low amount of drip makes the release of nicotine and flavor extended, to it’s limits."
            />
          </div>
        </div>
        <BlogItem content={blog} wrapperClass="blog__items mb-xl md:mb-[130px]" />
        <Button
          className="blog__btn uppercase"
          href="#"
          size="l"
          variant="ghost-1"
          text="all PRODUCTS"
          wrapperClass="text-center"
        />
      </div>
    </section>
  );
}
