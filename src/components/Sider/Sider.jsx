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
  const [groups, selected, selectItem] = useContext(GroupContext);

  const loading = !groups || !selected;
  // const preSelected = selected ? [`group-${selected.id}`] : null;
  const preSelected = null;

  const handleItemClick = ({ key }) => selectItem(parseInt(key, 10));

  return (
    <LytSider className="sider">
      {loading && renderLoading()}
      {!loading && (
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={preSelected}
          onClick={handleItemClick}
        >
          {groups.map(({ name, id }) => (
            <Menu.Item key={id}>{name}</Menu.Item>
          ))}
        </Menu>
      )}
    </LytSider>
  );
};

export default Sider;
