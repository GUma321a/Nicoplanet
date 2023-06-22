import React from 'react';
import { product } from './data';

import Product from '../../molecules/Product';
import { Button, Title, Text } from '../../atoms';

export default function SectionProduct() {
  return (
    <section className="product__inner container-margin">
      <div className="container">
        <Title
          size="h3"
          text="high quality non-tobacco nicotine pillows"
          className="product__title text-center mb-lg max-w-[720px] mx-auto"
        />
        <Text
          size="m"
          text="The product has a small white pouch with a long-lasting flavor and can be enjoyed for up to 45 minutes."
          className="product__subtitle text-center mb-xxl max-w-[480px] mx-auto md:mb-[58px]"
        />
        <Product content={product} wrapperClass="mb-md md:mb-xxl lg:mb-[186px]" />
        <Button
          text="all PRODUCTS"
          size="l"
          variant="ghost-1"
          className="product__btn"
          link="#"
          wrapperClass="text-center"
        />
      </div>
    </section>
  );
}
