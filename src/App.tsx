/**
 * APP PRINCIPAL
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Páginas públicas
import Home from "./pages/Home";
import About from "./pages/About";
import Design from "./pages/Design";
import Developer from "./pages/Developer";
import Contact from "./pages/Contact";

// Páginas login + admin protegida JWT
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";

// Componente que protege rutas
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>

      {/* Navbar visible en toda la web */}
      <Navbar />

      {/* Contenido principal */}
      <main className="pt-24 bg-white dark:bg-black w-full overflow-x-hidden">

        <Routes>

          {/* RUTAS PÚBLICAS */}
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/diseno" element={<Design />} />
          <Route path="/desarrolloWEB" element={<Developer />} />
          <Route path="/contacto" element={<Contact />} />

          {/* LOGIN (pública) */}
          <Route path="/login" element={<Login />} />

          {/* ADMIN PROTEGIDA CON JWT */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

        </Routes>

      </main>

      {/* Footer visible en toda la web */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;
