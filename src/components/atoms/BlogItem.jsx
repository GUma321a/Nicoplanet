import React from 'react';
import pt from 'prop-types';

import Image from './Image';
import Text from './Text';
import Link from './Link';

export default function BlogItem({ wrapperClass, content }) {
  return (
    <div className={`blog__wrapper ${wrapperClass}`}>
      {content.map((item) => {
        return (
          <Link className="blog__item" href={item.href}>
            <Image className="blog__image" src={item.src} />
            {item.title && <Text className="blog__title" size="blog-title" text={item.title} />}
            {item.subtitle && (
              <Text className="blog__subtitle" size="blog-subtitle" text={item.subtitle} />
            )}
            {item.date && <Text className="blog__date text-primary" size="s" text={item.date} />}
            {item.text && <Text className="blog__text" size="s" text={item.text} />}
          </Link>
        );
      })}
    </div>
  );
}

BlogItem.propTypes = {
  wrapperClass: pt.string,
  content: pt.shape(),
};
BlogItem.defaultProps = {
  wrapperClass: '',
};
