import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b">
      <div className="mx-auto max-w-7xl px-8">
        <nav className="flex h-24 items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight"
          >
            Fani<span className="text-purple-600">.dev</span>
          </Link>

          {/* LINKS */}
          <div className="flex gap-12">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/sobre-mi">Sobre mí</NavItem>
            <NavItem to="/diseno">Diseño</NavItem>
            <NavItem to="/contacto">Contacto</NavItem>
          </div>

        </nav>
      </div>
    </header>
  );
};

export default Navbar;

/* 
  ESTE COMPONENTE ES CLAVE
  Aquí viven los estilos chulos del menú
*/
const NavItem = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      to={to}
      className="
        relative font-medium text-gray-800
        after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-0 after:bg-purple-600
        hover:after:w-full after:transition-all
      "
    >
      {children}
    </Link>
  );
};
