import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import esES from 'antd/locale/es_ES';
import React, { lazy } from 'react';
import Dashboard from './components/Dashboard';
import { ConfigProvider, notification, message } from 'antd';

// Lazy imports
const ESTEFANIA = lazy(() => import('./components/ESTEFANIA'));

export default function App() {
  // Color selection
  const colorPrimary = '#00722d';

  // Notification and messages
  const [not_api, notificationContextHolder] = notification.useNotification();
  const [msg_api, msgContextHolder] = message.useMessage();

  return (
    <ConfigProvider
      locale={esES}
      theme={{
        token: {
          fontFamily: 'Lexend_Regular',
          colorPrimary: colorPrimary, // primary color theme
        },
      }}
    >
      {notificationContextHolder}
      {msgContextHolder}
      <Router>
        <Routes>
          <Route path="/" 
                element={<Dashboard >
                            <ESTEFANIA />
                          </Dashboard>} 
          />
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

