import React from 'react';
import pt from 'prop-types';

import Link from './Link';
import Text from './Text';

function LinkWithIcon({ content, className, ...props }) {
  return (
    <ul className={`link-with-icon flex flex-col gap-md ${className}`} {...props}>
      {content.map((item) => {
        return (
          <li key={item.text}>
            <Link href={item.href} external className="link-with-icon__link flex items-center">
              {item.icon && (
                <span
                  className="block transition-all w-md h-md bg-white mr-sm"
                  style={{
                    mask: `url(${item.icon.src}) no-repeat 50% 50%`,
                    WebkitMask: `url(${item.icon.src}) no-repeat 50% 50%`,
                    WebkitMaskSize: 'cover',
                    maskSize: 'cover',
                  }}
                />
              )}
              {item.text && <Text text={item.text} size="l" className="link-with-icon__text" />}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

LinkWithIcon.propTypes = {
  className: pt.string,
  content: pt.instanceOf(Array),
};

LinkWithIcon.defaultProps = {
  className: '',
};

export default LinkWithIcon;
