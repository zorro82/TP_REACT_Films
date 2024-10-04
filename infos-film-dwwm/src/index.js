// fichier index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Importer BrowserRouter
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter> {/* Le seul Router devrait être ici */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);