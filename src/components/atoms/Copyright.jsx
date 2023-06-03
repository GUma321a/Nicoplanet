import React from 'react';
import pt from 'prop-types';
import Text from './Text';

export default function Copyright({ year, company, className }) {
  return (
    <div
      className={`copyright border-t-[1px] text-center border-primary pt-sm md:pt-md ${className}`}
    >
      <Text
        text={`Copyright © ${year} ${company} | All rights reserved.`}
        className="text-primary"
      />
    </div>
  );
}

Copyright.propTypes = {
  year: pt.string,
  company: pt.string,
  className: pt.string,
};
Copyright.defaultProps = {
  year: '2022',
  company: 'Nicoplanet',
  className: '',
};
