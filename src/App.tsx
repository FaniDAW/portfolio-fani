//Importamos componentes y ruter 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// páginas
import Home from "./pages/Home";
import About from "./pages/About";
import Design from "./pages/Design";
import Developer from "./pages/Developer";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* margen superior para que el navbar no tape el contenido */}
      <main className="pt-24 w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/diseno" element={<Design />} />
          <Route path="/desarrolloWEB" element={<Developer />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
