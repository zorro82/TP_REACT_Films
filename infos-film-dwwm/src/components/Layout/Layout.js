// fichier Layout.js
import { Link, Outlet } from 'react-router-dom';
import './Layout.css'; // Ajout du CSS pour personnaliser le style de la navigation
// import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo-afpa.jpg'; // Assurez-vous d'avoir un logo d'AFPA

function Layout() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <div className="navbar-logo">
            <img src={logo} alt="Logo AFPA" />
          </div>
          <ul className="navbar-links">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/search" className="nav-link">Search</Link>
            </li>
            <li className="nav-item">
              <Link to="/list" className="nav-link">List</Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* <div className="container mt-4">
        <Outlet />
      </div> */}


      {/* <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li> 
                <Link to="/search" className="nav-link">Search</Link>
              </li>
              <li> 
                <Link to="/List" className="nav-link">List</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Outlet />
      </div> */}
      
    </div>
  );
}

export default Layout;