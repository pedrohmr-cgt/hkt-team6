import React from 'react';
import { node } from 'prop-types';

import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
