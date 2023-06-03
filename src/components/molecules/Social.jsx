import React from 'react';

import twitter from '../../assets/images/icons/Twitter.svg';
import youtube from '../../assets/images/icons/YouTube.svg';
import instagram from '../../assets/images/icons/Instagram.svg';
import facebook from '../../assets/images/icons/Facebook.svg';
import { Image, Link } from '../atoms';

export default function Social() {
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
    <div className="social absolute top-[50px] flex flex-col">
      {icons.map((item) => {
        return (
          <Link href={item.src} key={item.link} className="my-sm">
            <Image src={item.link} layout="intrinsic" />
          </Link>
        );
      })}
    </div>
  );
}
