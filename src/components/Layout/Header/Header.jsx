import "./Header.css";
import { Link } from "react-router-dom";
import BtnMode from "../../ui/btnMode";

const Header = () => {
  return (
    <>
      <div className="logo"></div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
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
    </>
  );
};

export default Header;
