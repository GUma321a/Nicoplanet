import React from 'react';

import { Link } from '../../atoms';

function Header() {
  return (
    <div>
      <ul className="flex gap-1">
        <li>
          <Link href="/" className="underline">
            home
          </Link>
        </li>
        <li>
          <Link href="/about" className="underline">
            about
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
