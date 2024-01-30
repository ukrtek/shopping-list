import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { fetchLists } from './api.js';
import './App.css';
const { Header, Sider, Content, Footer } = Layout;

function App() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetchLists()
      .then(data => setLists(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Layout className="layout">
      <Header className='header'>header!</Header>

      <Layout className='main'>
        <Sider className='ant-layout-sider'>
          <ul className='list-of-lists'>
            <li>New List</li>
            <li>New List</li>
            <li>New List</li>
          </ul>
        </Sider>

        <Content className='content'>
          <ul className='list'>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>
        </Content>
      </Layout>
      <Footer className='footer'>footer</Footer>
    </Layout>
  );
}

export default App;
