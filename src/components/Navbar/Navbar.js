import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <section>
        <Link to={"/"}>
          <h1 className="#titulo-sitio">CompuHiperMegaRed</h1>
        </Link>
      </section>
      <ul>
        <li>
          <Link to={`/category/Accion`}>
            <h2>Accion</h2>
          </Link>
        </li>
        <li>
          <Link to={`/category/RPG`}>
            <h2>RPG</h2>
          </Link>
        </li>
        <li>
          <Link to={`/category/Aventuras`}>
            <h2>Aventuras</h2>
          </Link>
        </li>
      </ul>
      <section>
        <CartWidget />
      </section>
    </nav>
  );
};

export default NavBar;
