import React, { useState } from 'react';

import { menu } from './data';

import { Button, Image, Link } from '../../atoms';

import header_logo from '../../../assets/images/header-logo.svg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const hundleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper flex justify-between items-center border-b border-white border-opacity-20 pb-[20px] px-sm">
          <Link href="./" className="header__logo z-[100]">
            <Image src={header_logo} layout="intrinsic" />
          </Link>
          <ul className={`${isOpen ? 'header__menu-active' : ''} header__menu`.trim()}>
            {menu.map((item) => {
              return (
                <li
                  className="header__menu-item text-24 mb-md mx-[10px] lg:text-14 lg:mb-0"
                  key={item.name}
                >
                  <Link href={item.href}>{item.name}</Link>
                </li>
              );
            })}
            <Button
              link="./"
              text="BECOME DISTRIBUTOR"
              variant="ghost"
              size="l"
              className="ml-md"
            />
          </ul>
          <button
            className={`burger-menu ${isOpen ? 'active-burger-menu' : ''}`.trim()}
            type="button"
            onClick={hundleMenu}
          >
            <span className="absolute w-full bg-white h-[2px] right-0 top-1/2 -translate-y-1/2 duration-300" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
