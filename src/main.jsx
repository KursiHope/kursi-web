import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './util/AppRoutes';
import Header from './components/Header';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  </React.StrictMode>,
)
