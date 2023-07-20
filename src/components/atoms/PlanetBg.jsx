import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import pt from 'prop-types';
import Image from './Image';

export default function PlanetBg({ className, bgItem, idName }) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to(`#${idName}`, {
      y: '50%',
      x: '50%',
      rotate: 180,
      scrollTrigger: {
        trigger: `#${idName}`,
        start: 'top 20%',
        end: 'bottom 30%',
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      className={`${className} w-1/2 background-decor left-0 max-w-[750px] max-h-[750px] h-full top-0 -z-10 absolute md:w-full`.trim()}
      id={idName}
    >
      <Image src={bgItem} />
    </div>
  );
}

PlanetBg.propTypes = {
  className: pt.string,
  bgItem: pt.instanceOf(Object),
  idName: pt.string,
};

PlanetBg.defaultProps = {
  className: '',
};
