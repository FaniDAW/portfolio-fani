import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// páginas
import Home from "./pages/Home";
import About from "./pages/About";
import Design from "./pages/Design";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* margen superior para que el navbar no tape el contenido */}
      <main className="pt-60 px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/diseno" element={<Design />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
