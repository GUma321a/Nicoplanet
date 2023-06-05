import React from 'react';
import pt from 'prop-types';

export default function PlanetBg({ className, bgItem, bgW, bgH }) {
  return (
    <span
      className={`planet-bg block absolute ${className} w-[${bgW}px] h-[${bgH}px]`}
      style={{
        mask: `url(${bgItem}) no-repeat 50% 50%`,
        WebkitMask: `url(${bgItem}) no-repeat 50% 50%`,
        WebkitMaskSize: 'cover',
        maskSize: 'cover',
      }}
    />
  );
}

PlanetBg.propTypes = {
  className: pt.string,
  bgItem: pt.string,
  bgW: pt.number,
  bgH: pt.number,
};

PlanetBg.defaultProps = {
  className: '',
  bgW: 100,
  bgH: 100,
};
