// App.js
import './App.css';
import Home from './Home/Home';
import About from './About/About'; // Ajout de l'import pour le composant About
import { Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Search from './Search/Search';
import List from './List/List';
import Film from './Film/Film';
import Footer from './Footer/Footer';

function App() {

  return (
    <div className="App">
      <Layout />
      <div className="content-wrapper">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<Search />} />
            <Route path="/List" element={<List />} />
            <Route path="/List/:data" element={<List />} />
            <Route path="/Film" element={<Film />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;