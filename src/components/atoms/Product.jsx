import React from 'react';
import pt from 'prop-types';

import Image from './Image';
import Link from './Link';
import Text from './Text';

export default function Product({ content, wrapperClass }) {
  return (
    <div className={`products__wrapper flex flex-wrap ${wrapperClass}`}>
      {content.map((item) => {
        return (
          <Link
            className="product text-center max-w-[255px] m-[10px]"
            key={item.title}
            href={item.link}
          >
            {item.src && (
              <div className="product__img relative mb-md block w-[255px]">
                <Image src={item.src} />
                <span className="bg-[#52C5D5] opacity-50 block w-full h-full rounded-[50%] absolute blur-[136px] top-0 -z-10 left-1/2 -translate-x-1/2" />
              </div>
            )}
            {item.title && (
              <Text
                size="product-title"
                text={item.title}
                className="product__title block uppercase"
              />
            )}
            {item.subtitle && (
              <Text
                size="product-subtitle"
                text={item.subtitle}
                className="product__subtitle mb-md block"
              />
            )}
            {item.desc && <Text text={item.desc} size="s" className="product__desc mb-md" />}
            <div className="product__info-wrapper">
              <div className="product__info-weight-inner flex justify-between">
                <Text className="product__info-weight-text text-primary" text="Pieces in can:" />
                <Text className="product__info-weight-number" text={item.weight} />
              </div>
              <div className="product__info-price flex justify-between">
                <Text className="product__info-price-text text-primary" text="Price:" />
                <Text className="product__info-price-number" text={item.price} />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

Product.propTypes = {
  content: pt.instanceOf(Array),
  wrapperClass: pt.string,
};

Product.defaultProps = {
  wrapperClass: '',
};
