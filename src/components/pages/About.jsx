import React from 'react';

import { Image } from '../atoms';

import makao from '../../assets/images/makao-3840x2160.jpg';

function About() {
  return (
    <div>
      <p>about page</p>
      <div className="max-w-[1000px]">
        <Image src={makao} sizes="(max-width: 1000px) 100vw, 1000px" />
      </div>
    </div>
  );
}

export default About;
