import React from 'react';
import pt from 'prop-types';

import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

function Layout({ children }) {
  return (
    <div className="p-3">
      <Header />
      <main className="my-2">{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: pt.node,
};

export default Layout;
