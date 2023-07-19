import './index.css';
import App from './App';
import React from 'react';
import Parse from "parse";
import { hydrateRoot } from "react-dom";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

Parse.initialize("75D12E85-5A55-49EC-84C5-2C68B52CF604", "5D856BB9-68C0-4EF6-B948-6F48DBDE1310");
Parse.enableLocalDatastore();
Parse.serverURL = 'https://www.sippys.com.mx/parse/growgreens';

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <App />);
} else {
  root.render(
    <App />
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
