import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import ListView from "./components/ListView.js";
import Sidebar from "./components/Sidebar.js";
import ItemAdd from "./components/ItemAdd.js";
import { fetchLists, fetchList } from "./api.js";
import "./App.css";

const { Header, Sider, Content, Footer } = Layout;

function App() {
  const [lists, setLists] = useState([]);
  const [selectedList, setSelectedList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchLists()
      .then((data) => {
        if (Array.isArray(data)) {
          setLists(data);
          if (data.length > 0) {
            setSelectedList(data[0]);
          }
        } else {
          const errorMessage = "Fetched data is not an array";
          console.error(`${errorMessage}:`, data);
          setError(errorMessage);
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load lists");
      })
      .finally(() => setLoading(false));
  }, []);

  const handleListSelect = async (listId) => {
    try {
      const data = await fetchList(listId);
      setSelectedList(data);
    } catch (err) {
      console.error("Error fetching list: ", err);
    }
  };

  return (
    <Layout className="layout">
      <Header className="header">All the Groceries You Need</Header>

      <Layout className="main">
        <Sider className="ant-layout-sider">
          <Sidebar
            lists={lists}
            onListSelect={handleListSelect}
            loading={loading}
            error={error}
          />
        </Sider>

        <Content className="content">
          <ItemAdd
            selectedList={selectedList}
            setSelectedList={setSelectedList}
          />
          {selectedList && <ListView list={selectedList} />}
        </Content>
      </Layout>
      <Footer className="footer"></Footer>
    </Layout>
  );
}

export default App;
