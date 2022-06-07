import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Homepage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            {/* <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch> */}
            <Routes>
                <Route exact path="/" caseSensitive={true} element={<Homepage />} />
                <Route exact path="/exchanges" caseSensitive={true} element={<Exchanges />} />
                <Route exact path="/cryptocurrencies" caseSensitive={true} element={<Cryptocurrencies />} />
                <Route exact path="/crypto/:coinId" caseSensitive={true} element={<CryptoDetails />} />
                <Route exact path="/news" caseSensitive={true} element={<News />} />
            </Routes>
          </div>
        </Layout>
      
        <div className="footer">
            <Typography.Title level={5} style={{ color:'white', textAlign: 'center' }}>
                Crptoverse <br/>
                All right reserved.
            </Typography.Title>
            <Space>
                <Link to="/">Home</Link>
                <Link to="/exchanges">Exchanges</Link>
                <Link to="/news">News</Link>
            </Space>
        </div>
      </div>
    </div>
  );
};
export default App;
