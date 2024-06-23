import React from 'react';
import Navbar from './Navbar'; // 假设你已经创建了 Navbar 组件
import Footer from './Footer'; // 假设你已经创建了 Footer 组件

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
