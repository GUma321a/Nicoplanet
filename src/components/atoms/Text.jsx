import React from 'react';
import pt from 'prop-types';

function Text({ text, className, children, size }) {
  const textSize = () => {
    if (size === 's') return 'text-18';
    if (size === 'm') return 'text-16';
    if (size === 'l') return 'text-14';
    return '';
  };

  return <p className={`${className} ${textSize()}`}>{children || text || 'Text'}</p>;
}

Text.propTypes = {
  children: pt.node,
  text: pt.string,
  className: pt.string,
  size: pt.oneOf(['s', 'm', 'l']),
};

Text.defaultProps = {
  className: '',
  size: 's',
};

export default Text;
