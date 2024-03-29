import React from 'react';
import pt from 'prop-types';

function Text({ text, className, children, size }) {
  const textSize = () => {
    if (size === 's') return 'text-14';
    if (size === 'm') return 'text-16';
    if (size === 'l') return 'text-24';
    if (size === 'product-title') return 'product-title';
    if (size === 'product-subtitle') return 'product-subtitle';
    if (size === 'blog-title') return 'blog-title';
    if (size === 'blog-subtitle') return 'blog-subtitle';
    return '';
  };

  return <p className={`${className} ${textSize()}`}>{children || text || 'Text'}</p>;
}

Text.propTypes = {
  children: pt.node,
  text: pt.string,
  className: pt.string,
  size: pt.oneOf([
    's',
    'm',
    'l',
    'product-title',
    'product-subtitle',
    'blog-title',
    'blog-subtitle',
  ]),
};

Text.defaultProps = {
  className: '',
  size: 's',
};

export default Text;
