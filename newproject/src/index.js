import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // './components/App' 대신 './App'로 수정
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
