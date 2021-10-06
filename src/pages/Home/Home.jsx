import React from 'react';
import { Layout, Spin } from 'antd';

import Sider from '../../components/Sider';
import { GroupContextProvider } from '../../context/group';
import './Home.scss';

const { Content } = Layout;

const Home = () => {
  return (
    <GroupContextProvider>
      <Layout>
        <Sider />
        <Content className="home__content">
          <Spin size="large" />
        </Content>
      </Layout>
    </GroupContextProvider>
  );
};

export default Home;
