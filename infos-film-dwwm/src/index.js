// fichier index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Importer BrowserRouter
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import React from 'react’; 
// import ReactDOM from 'react-dom’;
// import App from './App';


ReactDOM.render(
  <BrowserRouter> {/* Le seul Router devrait être ici */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);