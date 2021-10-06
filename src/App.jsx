import React from 'react';
import { Layout } from 'antd';

import Header from './components/Header';
import Sider from './components/Sider';
import Home from './pages/Home';
import './App.scss';

const { Content } = Layout;

function App() {
  return (
    <Layout className="app">
      <Header />
      <Layout>
        <Sider />
        <Content>
          <Home />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
