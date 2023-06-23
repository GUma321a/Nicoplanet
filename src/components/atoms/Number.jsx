import React from 'react';
import pt from 'prop-types';
import Image from './Image';

export default function Number({ className, content, wrapperClass }) {
  return (
    <div className={`${wrapperClass} number hidden max-h-[162px] md:block`.trim()}>
      <Image src={content} className={className} layout="intrinsic" />
    </div>
  );
}

Number.propTypes = {
  className: pt.string,
  content: pt.shape(),
  wrapperClass: pt.string,
};

Number.defaultProps = {
  className: '',
  content: '',
  wrapperClass: '',
};
