import React from 'react';
import pt from 'prop-types';
import Image from './Image';

export default function PlanetBg({ className, bgItem }) {
  return (
    <div className={`${className} background-decor absolute`.trim()}>
      <Image src={bgItem} />
    </div>
  );
}

PlanetBg.propTypes = {
  className: pt.string,
  bgItem: pt.instanceOf(Object),
};

PlanetBg.defaultProps = {
  className: '',
};
