import React from 'react';
import { Layout } from 'antd';

import logo from '../../assets/logo.svg';
import './Header.scss';

const { Header: LytHeader } = Layout;

const Header = () => {
  return (
    <LytHeader className="header">
      <img src={logo} className="header__logo" alt="logo" />
    </LytHeader>
  );
};

export default Header;
