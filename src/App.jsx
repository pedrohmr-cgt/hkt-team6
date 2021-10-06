import React from 'react';
import { Layout } from 'antd';

import Header from './components/Header';
import Home from './pages/Home';
import './App.scss';

function App() {
  return (
    <Layout className="app">
      <Header />
      <Home />
    </Layout>
  );
}

export default App;
