import React from 'react';
import { Layout, Menu } from 'antd';

import './Sider.scss';

const { Sider: LytSider } = Layout;

const Sider = () => {
  return (
    <LytSider className="sider">
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1">Group 1</Menu.Item>
        <Menu.Item key="2">Group 2</Menu.Item>
        <Menu.Item key="3">Group 3</Menu.Item>
      </Menu>
    </LytSider>
  );
};

export default Sider;
