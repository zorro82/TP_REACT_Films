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

function App() {

  return (
    // <Router>
      <div className="App">
        {/* <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> {/* Ajout de la route About */}
            <Route path="/search" element={<Search />} />
             {/* Route pour accéder à la page List sans paramètre */}
            <Route path="/List" element={<List />} />
             {/* Route pour accéder à la page List avec un paramètre */}
            <Route path="/List/:data" element={<List />} />
            <Route path="/Film" element={<Film />} />
          </Route>
        </Routes>
      </div>
    // </Router>
  );
}

export default App;