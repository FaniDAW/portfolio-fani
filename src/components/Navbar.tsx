import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";


const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-8">
        <div className="flex h-24 items-center justify-between">

          {/* LOGO */}
          <NavLink
            to="/"
            className="text-2xl font-bold tracking-tight"
          >
            Fani<span className="text-purple-600">.dev</span>
          </NavLink>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex gap-10">
            <MenuLink to="/">Home</MenuLink>
            <MenuLink to="/sobre-mi">Sobre mí</MenuLink>
            <MenuLink to="/diseno">Diseño</MenuLink>
            <MenuLink to="/contacto">Contacto</MenuLink>
          </nav>

          <button
            onClick={toggleTheme}
            className="
              ml-6
              rounded-full
              border
              px-4 py-2
              text-sm
              transition
              dark:border-white
            "
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>


        </div>
      </div>
    </header>
  );
};

export default Navbar;

/* ---------- LINK BONITO ---------- */
/* línea que crece suavemente bajo los links */

const MenuLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <NavLink
      to={to}
      className="relative font-medium text-gray-800
        after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-0 after:bg-purple-600
        hover:after:w-full after:transition-all"
    >
      {children}
    </NavLink>
  );
};
