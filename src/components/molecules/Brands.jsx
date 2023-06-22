import React from 'react';
import pt from 'prop-types';
import { Image } from '../atoms';

export default function Brands({ className, content, wrapperClass }) {
  return (
    <div
      className={`brands-wrapper grid grid-cols-2 items-center gap-8 md:grid-cols-3 lg:grid-cols-4 ${wrapperClass}`}
    >
      {content.map((item) => {
        return (
          <div
            className="block w-full flex-20 mx-[10px] opacity-40 transition-all hover:opacity-100"
            key={item.id}
          >
            <Image src={item.src} className={className} />
          </div>
        );
      })}
    </div>
  );
}

Brands.propTypes = {
  className: pt.string,
  content: pt.instanceOf(Object),
  wrapperClass: pt.string,
};
Brands.defaultProps = {
  className: '',
  wrapperClass: '',
};
