// eslint-disable-next-line import/no-extraneous-dependencies
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
// eslint-disable-next-line import/no-unresolved
import '@splidejs/react-splide/css';

import React from 'react';
import pt from 'prop-types';

import { Image } from '../atoms';

export default function Carousel({ content, className }) {
  const splideOptions = {
    type: 'loop',
    rewind: true,
  };
  return (
    <Splide options={splideOptions} aria-label="My Favorite Images" className={`${className}`}>
      {content.map((item) => {
        return (
          <SplideSlide options={{ type: 'loop' }} key={item.id}>
            <Image src={item.src} />
          </SplideSlide>
        );
      })}
    </Splide>
  );
}

Carousel.propTypes = {
  content: pt.instanceOf(Object),
  className: pt.string,
};
Carousel.defaultProps = {
  className: '',
};
