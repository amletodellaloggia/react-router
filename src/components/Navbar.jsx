import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand text-white" to="/">
          MyStore
        </NavLink>
        <ul className="nav">
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/">
              Homepage
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/chisiamo">
              Chi Siamo
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/prodotti">
              Prodotti
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
