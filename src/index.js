import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



let number = 10;

console.log(++number );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  );
