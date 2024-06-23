import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/global.css';  // 全局样式
import App from './app/App';  // 引入App组件


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


