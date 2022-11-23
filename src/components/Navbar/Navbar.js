import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget";

const Navbar = ({ nomPagina, precios, nosotros, cosas }) => {
  return (
    <nav className="nav">
        <a href="/" id="titulo-sitio">{nomPagina}</a>
        <ul>
            <li>
              <a href= "/precios">{precios}</a>
            </li>
            <li>
              <a href= "/nosotros">{nosotros}</a>
            </li>
            <li>
              <a href="/cositas">{cosas}</a>
            </li>
            <li className="cartWidget">
              <CartWidget />
            </li>
        </ul>
      
    </nav>
  )
}

export default Navbar;