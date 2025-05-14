import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem('auth', 'false');
    navigate('/login');
  };

  return (
    <aside className="navbar">
      <h2 className=  "navbar-title"> HOME</h2>
      <nav className="navbar-links">
        <Link className="nav-button" to="/servicios">Servicios</Link>
        <Link className="nav-button" to="/contacto">Contacto</Link>
        <Link className="nav-button" to="/acerca">Acerca de</Link>
        <button className="nav-button" onClick={handleLogout}>Cerrar Sesión</button>
      </nav>
    </aside>
  );
};

export default Navbar;