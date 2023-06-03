import React from 'react';

import { Button, Image, Link } from '../../atoms';

import header_logo from '../../../assets/images/header-logo.svg';

function Header() {
  const menu = [
    {
      name: 'Home',
      href: '#',
    },
    {
      name: 'About',
      href: '#',
    },
    {
      name: 'Press',
      href: '#',
    },
    {
      name: 'Products',
      href: '#',
    },
    {
      name: 'Contact',
      href: '#',
    },
    {
      name: 'distribution',
      href: '#',
    },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper flex justify-between items-center border-b border-white border-opacity-20 pb-[20px]">
          <Link href="codemagic.com.ua">
            <Image src={header_logo} layout="intrinsic" />
          </Link>
          <ul className="header__menu flex justify-between uppercase items-center">
            {menu.map((item) => {
              return (
                <li className="header__menu-item mx-[10px]" key={item.href}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              );
            })}
            <Button
              link="codemagic.com.ua"
              text="BECOME DISTRIBUTOR"
              variant="ghost"
              size="l"
              className="ml-md"
            />
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
