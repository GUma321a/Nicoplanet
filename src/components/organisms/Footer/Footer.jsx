import React from 'react';
import { Title } from '../../atoms';

import Social from '../../molecules/Social';
import LinkWithIcon from '../../atoms/LinkWithIcon';

import icon1 from '../../../assets/images/icons/map.svg';
import icon2 from '../../../assets/images/icons/mail.svg';
import icon3 from '../../../assets/images/icons/tell.svg';
import Form from '../../atoms/Form';
import Copyright from '../../atoms/Copyright';
import Number from '../../atoms/Number';

import decor from '../../../assets/images/icons/3.svg';

function Footer() {
  const contact = [
    {
      text: 'Al. 29 Listopada 94, 31-406 Kraków',
      icon: icon1,
      href: '#',
    },
    {
      text: 'info@nicoplanet.eu',
      icon: icon2,
      href: '#',
    },
    {
      text: '+48 797 889 128 ',
      icon: icon3,
      href: '#',
    },
  ];

  return (
    <section className="footer container-margin">
      <div className="container">
        <div className="footer__wrapper grid grid-cols-1 justify-between mb-lg md:mb-[80px] md:grid-cols-2">
          <div className="footer__info mb-xl md:mb-0">
            <Title
              className="footer__info-title mb-md  md:mb-lg lg:mb-[63px]"
              size="h2"
              text="SAY HELLO"
            />
            <LinkWithIcon content={contact} className="mb-md" />
            <Social className="mx-sm md:mx-md" />
          </div>
          <div className="footer__form">
            <Number content={decor} wrapperClass="mb-lg" />
            <Form textarea />
          </div>
        </div>
        <Copyright />
      </div>
    </section>
  );
}

export default Footer;
