import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserContextProvider from './context/UserContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </UserContextProvider>
);

reportWebVitals();
