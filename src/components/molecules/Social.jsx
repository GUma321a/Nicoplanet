import React from 'react';

import pt from 'prop-types';

import twitter from '../../assets/images/icons/Twitter.svg';
import youtube from '../../assets/images/icons/YouTube.svg';
import instagram from '../../assets/images/icons/Instagram.svg';
import facebook from '../../assets/images/icons/Facebook.svg';
import { Image, Link } from '../atoms';

export default function Social({ wrapperClass, className }) {
  const icons = [
    {
      link: facebook,
      alt: 'facebook',
      src: 'codemagic.com.ua',
    },
    {
      link: twitter,
      alt: 'twitter',
      src: 'codemagic.com.ua',
    },
    {
      link: instagram,
      alt: 'instagram',
      src: 'codemagic.com.ua',
    },
    {
      link: youtube,
      alt: 'youtube',
      src: 'codemagic.com.ua',
    },
  ];

  return (
    <div className={`social ${wrapperClass}`}>
      {icons.map((item) => {
        return (
          <Link
            href={item.src}
            key={item.alt}
            className={`opacity-40 transition-all≠ hover:opacity-100 ${className}`}
          >
            <Image src={item.link} layout="intrinsic" />
          </Link>
        );
      })}
    </div>
  );
}

Social.propTypes = {
  wrapperClass: pt.string,
  className: pt.string,
};
