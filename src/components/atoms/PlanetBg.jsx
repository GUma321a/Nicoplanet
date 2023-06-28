import React from 'react';
import pt from 'prop-types';

export default function PlanetBg({ className, bgItem, width, height }) {
  return (
    <span
      className={`${className} planet-bg block absolute w-[${width}px] h-[${height}px]`.trim()}
      style={{
        mask: `url(${bgItem.src}) no-repeat 50% 50%`,
        WebkitMask: `url(${bgItem.src}) no-repeat 50% 50%`,
        WebkitMaskSize: 'cover',
        maskSize: 'cover',
      }}
    />
  );
}

PlanetBg.propTypes = {
  className: pt.string,
  bgItem: pt.instanceOf(Object),
  width: pt.number,
  height: pt.number,
};

PlanetBg.defaultProps = {
  className: '',
  width: 100,
  height: 100,
};
