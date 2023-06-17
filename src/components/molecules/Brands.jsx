import React from 'react';
import pt from 'prop-types';
import { Image } from '../atoms';

export default function Brands({ className, content, wrapperClass }) {
  return (
    <div className={`brands-wrapper ${wrapperClass}`}>
      {content.map((item) => {
        return <Image src={item.src} className={className} />;
      })}
    </div>
  );
}

Brands.propTypes = {
  className: pt.string,
  content: pt.shape,
  wrapperClass: pt.string,
};
Brands.propdefault = {
  className: '',
  wrapperClass: '',
};
