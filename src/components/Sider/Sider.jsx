import React, { useContext } from 'react';
import { Layout, Menu, Skeleton } from 'antd';

import { GroupContext } from '../../context/group';
import './Sider.scss';

const { Sider: LytSider } = Layout;

const renderLoading = () => {
  return (
    <div className="sider__loading">
      <Skeleton active />
    </div>
  );
};

const Sider = () => {
  const [groups] = useContext(GroupContext);

  const preSelected = groups ? [`group-${groups[0].id}`] : null; // FIXME

  return (
    <LytSider className="sider">
      <Menu theme="dark" mode="inline" defaultSelectedKeys={preSelected}>
        {!groups && renderLoading()}
        {groups &&
          groups.map(({ name, id }) => (
            <Menu.Item key={`group-${id}`}>{name}</Menu.Item>
          ))}
      </Menu>
    </LytSider>
  );
};

export default Sider;
