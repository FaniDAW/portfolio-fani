import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/sobre-mi">Sobre mí</NavLink>
      <NavLink to="/diseno">Diseño</NavLink>
      <NavLink to="/contacto">Contacto</NavLink>
    </nav>
  );
};

export default Navbar;
