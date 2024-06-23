import React from 'react';
import HomePage from '../pages/HomePage'; 
import AboutPage from '../pages/AboutPage'; 
import Layout from '../components/layout/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // 路由管理

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />  // 使用 element 属性传递组件
          <Route path="/about" element={<AboutPage />} />  // 使用 element 属性传递组件
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
