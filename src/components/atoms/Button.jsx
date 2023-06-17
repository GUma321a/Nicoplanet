import React from 'react';
import pt from 'prop-types';

import Link from './Link';

function Button({
  children,
  link,
  text,
  buttonType,
  variant,
  size,
  className,
  wrapperClass,
  ...props
}) {
  const btnClass = () => {
    // if (variant === 'ghost' && size === 'xl') return 'button-ghost-m sm:button-ghost-xl';
    if (variant === 'ghost' && size === 'l') return 'button-ghost-m sm:button-ghost-l';
    if (variant === 'ghost-1' && size === 'l') return 'button-ghost-1-m sm:button-ghost-1-l';
    if (variant === 'cta' && size === 'l') return 'button-cta-m sm:button-cta-l';
    return '';
  };

  if (link) {
    return (
      <div className={wrapperClass}>
        <Link href={link} className={`${btnClass()} ${className}`.trim()}>
          {text || children || 'Button'}
        </Link>
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      {/* eslint-disable-next-line react/button-has-type */}
      <button type={buttonType} className={`${btnClass()} ${className}`.trim()} {...props}>
        {text || children || 'Button'}
      </button>
    </div>
  );
}

Button.propTypes = {
  children: pt.node,
  link: pt.string,
  text: pt.string,
  buttonType: pt.oneOf(['button', 'submit']),
  variant: pt.oneOf(['cta', 'ghost', 'ghost-1']),
  size: pt.oneOf(['m', 'l', 'xl']),
  className: pt.string,
  wrapperClass: pt.string,
};

Button.defaultProps = {
  text: '',
  buttonType: 'button',
  variant: 'cta',
  size: 'xl',
  className: '',
};

export default Button;
