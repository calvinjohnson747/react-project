import './navBar.css'
import { Link } from 'react-router-dom'
//import { useNavigate } from 'react-router-dom';

function NavBar({ isAuth }){
    return(
      <header className="navbar navbar-light bg-light custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Pantry 3427</Link>
        <nav className="navbar-nav ms-auto d-flex flex-row">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          {isAuth && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/pantry">Pantry</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">Shopping Cart</Link>
              </li>
            </>
          )}
          {!isAuth && (
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          )}
        </nav>
      </div>
    </header>
    );
  }

export default NavBar;