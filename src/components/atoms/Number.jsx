import React from 'react';
import pt from 'prop-types';
import Image from './Image';

export default function Number({ className, content, wrapperClass, width }) {
  return (
    <div className={`${wrapperClass} number block max-w-[${width}px] w-full`.trim()}>
      <Image src={content} className={className} />
    </div>
  );
}

Number.propTypes = {
  className: pt.string,
  content: pt.shape(),
  wrapperClass: pt.string,
  width: pt.number,
};

Number.defaultProps = {
  className: '',
  content: '',
  wrapperClass: '',
  width: 100,
};
