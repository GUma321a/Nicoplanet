import React from 'react';
import { contact } from './data';
import { Map, Title } from '../../atoms';

import Social from '../../molecules/Social';
import LinkWithIcon from '../../atoms/LinkWithIcon';

import Form from '../../atoms/Form';
import Copyright from '../../atoms/Copyright';
import Number from '../../atoms/Number';

import decor from '../../../assets/images/icons/3.svg';

function Footer() {
  return (
    <section className="footer mt-[100px] md:mt-[180px]">
      <Map />
      <div className="container">
        <div className="footer__wrapper grid grid-cols-1 justify-between mb-lg mt-md md:mb-[80px] md:grid-cols-2">
          <div className="footer__info mb-xl md:mb-0" id="contact">
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
            <Form textarea id="contact" />
          </div>
        </div>
        <Copyright />
      </div>
    </section>
  );
}

export default Footer;
