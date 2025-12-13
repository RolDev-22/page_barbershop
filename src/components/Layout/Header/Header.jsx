import "./header.css";
import { Link } from "react-router-dom";
import BtnMode from "../../ui/btnMode";
import BtnMenu from "../../ui/BtnMenu";

const Header = () => {
  return (
    <header>
      <figure>
        <img src="/logoBarber.png" alt="" />
      </figure>
      <nav id="navMenu">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Sobre Nosotros</Link>
          </li>
          <li>
            <Link to="/service">Servicios</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
        <BtnMode />
      </nav>
      <BtnMenu />
    </header>
  );
};

export default Header;
