import React from 'react';
import { Button, Image, Title } from '../../atoms';
import Text from '../../atoms/Text';

import number from '../../../assets/images/icons/1.svg';

export default function SectionInfo() {
  const text = [
    {
      text: 'The pouch comes with plant fiber filling and is tobacco free, to avoid staining your teeth and bring dripping to a minimum. While the low amount of drip makes the release of nicotine and flavor extended, to it’s limits.',
    },
    {
      text: 'The product has a small white pouch with a long-lasting flavor and can be enjoyed for up to 45 minutes.',
    },
  ];

  return (
    <section className="info container-padding bg-infoBg bg-no-repeat bg-left bg-[length:200px_220px] md:bg-[length:500px_550px] lg:bg-[length:800px_850px]">
      <div className="container">
        <div className="info__wrapper flex justify-between">
          <div className="info__number block w-[245px]">
            <Image src={number} />
          </div>
          <div className="info__description max-w-[570px]">
            <Title
              size="h2"
              text="high-quality non-tobacco nicotine pads"
              className="info__description-title mb-[60px]"
            />
            {text.map((item) => {
              return <Text className="info__description-text" text={item.text} key={item.text} />;
            })}
            <Button
              text="all PRODUCTS "
              variant="cta"
              link="codemagic.com.ua"
              size="l"
              className="info__description-button mt-sm md:mt-xl lg:mt"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
