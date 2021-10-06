import React from 'react';
import { Layout } from 'antd';

import Sider from '../../components/Sider';
import TDViewer from './TDViewer';
import { GroupContextProvider } from '../../context/group';
import './Home.scss';

const { Content } = Layout;

const Home = () => {
  return (
    <GroupContextProvider>
      <Layout>
        <Sider />
        <Content className="home__content">
          <TDViewer />
        </Content>
      </Layout>
    </GroupContextProvider>
  );
};

export default Home;
