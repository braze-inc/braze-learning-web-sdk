import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as braze from "@braze/web-sdk";

braze.initialize('c3f0c0c1-6685-4edc-8a87-72f3feee598c', {
  baseUrl: "sdk.iad-06.braze.com", 
  enableLogging: true,
  allowUserSuppliedJavascript: true
});

braze.changeUser('TK');

braze.openSession();

braze.requestPushPermission();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


