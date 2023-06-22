import React from 'react';
import pt from 'prop-types';

import { Image, Text, Link } from '../atoms';

export default function BlogItem({ wrapperClass, content }) {
  return (
    <div
      className={`blog__wrapper grid grid-cols-1 justify-between gap-[30px] md:grid-cols-2 lg:grid-cols-3 ${wrapperClass}`}
    >
      {content.map((item) => {
        return (
          <Link className="blog__item" href={item.href} key={item.id}>
            <Image className="blog__image transition-all" src={item.src} />
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
  content: pt.instanceOf(Object),
};
BlogItem.defaultProps = {
  wrapperClass: '',
};
