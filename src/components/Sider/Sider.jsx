import React, { useContext } from 'react';
import { Layout, Menu } from 'antd';

import { GroupContext } from '../../context/group';
import './Sider.scss';

const { Sider: LytSider } = Layout;

const Sider = () => {
  const [groups] = useContext(GroupContext);

  return (
    <LytSider className="sider">
      <Menu theme="dark" mode="inline">
        {groups.map(group => (
          <Menu.Item key={`group-${group}`}>{group}</Menu.Item>
        ))}
      </Menu>
    </LytSider>
  );
};

export default Sider;
