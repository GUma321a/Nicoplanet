// eslint-disable-next-line import/no-extraneous-dependencies
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
// eslint-disable-next-line import/no-unresolved
import '@splidejs/react-splide/css';

import React from 'react';
import pt from 'prop-types';

import { Image } from '../atoms';

export default function Carousel({ content, className, perPage }) {
  const splideOptions = {
    type: 'loop',
    rewind: true,
    perPage: `${perPage}`,
    gap: '1rem',
  };
  return (
    <Splide
      options={splideOptions}
      aria-label="My Favorite Images"
      className={`${className}`.trim()}
    >
      {content.map((item) => {
        return (
          <SplideSlide key={item.id} className="flex items-center">
            <div className="carousel__wrapper w-full">
              <Image src={item.src} />
            </div>
          </SplideSlide>
        );
      })}
    </Splide>
  );
}

Carousel.propTypes = {
  content: pt.instanceOf(Object),
  className: pt.string,
  perPage: pt.number,
};
Carousel.defaultProps = {
  className: '',
  perPage: 1,
};
