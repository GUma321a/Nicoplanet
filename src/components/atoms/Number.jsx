import React from 'react';
import pt from 'prop-types';
import Image from './Image';

export default function Number({ className, content, wrapperClass, w }) {
  return (
    <div className={`number block ${wrapperClass} w-[${w}px]`}>
      <Image src={content} className={className} />
    </div>
  );
}

Number.propTypes = {
  className: pt.string,
  content: pt.string,
  wrapperClass: pt.string,
  w: pt.number,
};

Number.defaultProp = {
  className: '',
  content: '',
  wrapperClass: '',
};
