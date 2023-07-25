import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2';
import { BrowserRouter } from 'react-router-dom'
import Test from './admin/scenes/team/Test'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'remixicon/fonts/remixicon.css'
import Admin from './admin/Admin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App2/>
    {/* <Admin/> */}
    {/* <Test/> */}
  </BrowserRouter>

);

