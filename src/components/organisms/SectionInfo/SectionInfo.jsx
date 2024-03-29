import React from 'react';
import { Button, Title } from '../../atoms';
import Text from '../../atoms/Text';

import number from '../../../assets/images/icons/1.svg';
import Number from '../../atoms/Number';
import PlanetBg from '../../atoms/PlanetBg';
import decor from '../../../assets/images/decor/info-bg.png';

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
    <section className="info container-padding relative">
      <div className="container">
        <div className="info__wrapper flex justify-between">
          <Number content={number} width={245} />
          <div className="info__description max-w-[570px] w-full">
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
              link="#"
              size="l"
              className="info__description-button mt-sm md:mt-xl lg:mt"
            />
          </div>
        </div>
        <PlanetBg bgItem={decor} className="info__decor" idName="info__decor" />
      </div>
    </section>
  );
}
