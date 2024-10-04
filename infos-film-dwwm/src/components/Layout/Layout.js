// fichier Layout.js
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
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
              <li> 
                <Link to="/Film" className="nav-link">Film</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;