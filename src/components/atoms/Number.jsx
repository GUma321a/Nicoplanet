import React from 'react';
import pt from 'prop-types';
import Image from './Image';

export default function Number({ content, wrapperClass }) {
  return (
    <div className={`${wrapperClass} number hidden max-h-[162px] md:block`.trim()}>
      <Image src={content} layout="intrinsic" />
    </div>
  );
}

Number.propTypes = {
  content: pt.shape(),
  wrapperClass: pt.string,
};

Number.defaultProps = {
  content: '',
  wrapperClass: '',
};
