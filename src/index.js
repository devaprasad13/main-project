import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import AOS from 'aos';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './Admins/Sidebar';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import App from './App';


AOS.init();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<React.StrictMode>
  <App/>
  </React.StrictMode>
  </BrowserRouter>
  
 
  
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();