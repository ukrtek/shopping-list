import ListView from './components/ListView.js';
import Sidebar from './components/Sidebar.js';
import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { fetchLists, fetchList } from './api.js';
import './App.css';
const { Header, Sider, Content, Footer } = Layout;

function App() {
  const [lists, setLists] = useState([]);
  const [selectedList, setSelectedList] = useState(null);

  useEffect(() => {
    fetchLists()
      .then(data => setLists(data))
      .catch(err => console.error(err));
  }, []);

  const handleListSelect = async (listId) => {
    try {
      const data = await fetchList(listId); // Use the imported fetchList function
      setSelectedList(data);
    } catch (err) {
      console.error('Error fetching list: ', err);
    }
  };

  return (
    <Layout className="layout">
      <Header className='header'>header!</Header>

      <Layout className='main'>
        <Sider className='ant-layout-sider'>
          <Sidebar lists={lists} onListSelect={handleListSelect}/>
        </Sider>

        <Content className='content'>
          {selectedList && <ListView list={selectedList} />}
        </Content>
      </Layout>
      <Footer className='footer'>footer</Footer>
    </Layout>
  );
}

export default App;
