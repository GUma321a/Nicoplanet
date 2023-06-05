import React from 'react';
import Title from '../../atoms/Title';
import Text from '../../atoms/Text';

import product_1 from '../../../assets/images/products/product-1.png';
import product_2 from '../../../assets/images/products/product-2.png';
import product_3 from '../../../assets/images/products/product-3.png';
import product_4 from '../../../assets/images/products/product-4.png';
import product_5 from '../../../assets/images/products/product-5.png';
import product_6 from '../../../assets/images/products/product-6.png';
import product_7 from '../../../assets/images/products/product-7.png';
import product_8 from '../../../assets/images/products/product-8.png';
import Product from '../../atoms/Product';
import { Button } from '../../atoms';

export default function SectionProduct() {
  const product = [
    {
      link: '#',
      src: product_1,
      title: 'planet',
      subtitle: 'Coconut Mercury',
      desc: 'Just a crazy mint explosion followed by some satisfying freezing tickles',
      weight: '16 mg',
      price: '2,20 €',
    },
    {
      link: '#',
      src: product_2,
      title: 'NIcoplanet',
      subtitle: 'Lemon Venus',
      desc: 'Just a crazy mint explosion followed by some satisfying freezing tickles',
      weight: '16 mg',
      price: '2,20 €',
    },
    {
      link: '#',
      src: product_3,
      title: 'NIcoplanet',
      subtitle: 'Sweet mint Earth',
      desc: 'Just a crazy mint explosion followed by some satisfying freezing tickles',
      weight: '16 mg',
      price: '2,20 €',
    },
    {
      link: '#',
      src: product_4,
      title: 'NIcoplanet',
      subtitle: 'Orange Mars',
      desc: 'Just a crazy mint explosion followed by some satisfying freezing tickles',
      weight: '16 mg',
      price: '2,20 €',
    },
    {
      link: '#',
      src: product_5,
      title: 'NIcoplanet',
      subtitle: 'VANILLA JUPITER',
      desc: 'Just a crazy mint explosion followed by some satisfying freezing tickles',
      weight: '16 mg',
      price: '2,20 €',
    },
    {
      link: '#',
      src: product_6,
      title: 'NIcoplanet',
      subtitle: 'Pineapple Saturn',
      desc: 'Just a crazy mint explosion followed by some satisfying freezing tickles',
      weight: '16 mg',
      price: '2,20 €',
    },
    {
      link: '#',
      src: product_7,
      title: 'NIcoplanet',
      subtitle: 'Menthol Uranium',
      desc: 'Just a crazy mint explosion followed by some satisfying freezing tickles',
      weight: '16 mg',
      price: '2,20 €',
    },
    {
      link: '#',
      src: product_8,
      title: 'NIcoplanet',
      subtitle: 'Energy Neptune',
      desc: 'Just a crazy mint explosion followed by some satisfying freezing tickles',
      weight: '16 mg',
      price: '2,20 €',
    },
  ];

  return (
    <section className="product container-margin">
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
