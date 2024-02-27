import ListView from './components/ListView.js';
import Sidebar from './components/Sidebar.js';
import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { fetchLists, fetchList, addItemToList } from './api.js';
import './App.css';
import ItemAdd from './components/ItemAdd.js';
const { Header, Sider, Content, Footer } = Layout;

function App() {
  const [lists, setLists] = useState([]);
  const [selectedList, setSelectedList] = useState(null);

  useEffect(() => {
    fetchLists()
      .then(data => {
        setLists(data);
        if (data.length > 0) {
          setSelectedList(data[0]);
        }
      })
      .catch(err => console.error(err));
  }, []);

  const handleListSelect = async (listId) => {
    try {
      const data = await fetchList(listId);
      setSelectedList(data);
    } catch (err) {
      console.error('Error fetching list: ', err);
    }
  };

  return (
    <Layout className="layout">
      <Header className='header'>All the Groceries You Need</Header>

      <Layout className='main'>
        <Sider className='ant-layout-sider'>
          <Sidebar lists={lists} onListSelect={handleListSelect}/>
        </Sider>

        <Content className='content'>
          <ItemAdd selectedList={selectedList} setSelectedList={setSelectedList}/>
          {selectedList && <ListView list={selectedList} />}
        </Content>
      </Layout>
      <Footer className='footer'></Footer>
    </Layout>
  );
};

export default App;
