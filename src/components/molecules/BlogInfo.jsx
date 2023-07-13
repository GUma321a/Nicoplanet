import React from 'react';
import pt from 'prop-types';

import { Image, Text, Title } from '../atoms';

export default function BlogInfo({ content, wrapperClass }) {
  return (
    <div className={`blog__wrapper ${wrapperClass}`.trim()}>
      <Title size="h2" text={content.title} className="blog__title mb-xl md:mb-[60px]" />
      <div className="blog__img mb-xl md:mb-[74px]">
        <Image src={content.src} />
      </div>
      <Text
        size="m"
        text={content.text}
        className="blog__text mb-[50px] max-w-[850px] mx-auto md:mb-[100px]"
      />
    </div>
  );
}

BlogInfo.propTypes = {
  content: pt.instanceOf(Object),
  wrapperClass: pt.string,
};
BlogInfo.defaultProps = {
  wrapperClass: '',
};
