import React, { useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Importação das páginas
import Home from './pages/Home';
import Preservacao from './pages/Preservacao';
import PontosTuristicos from './pages/PontosTuristicos';
import Curiosidades from './pages/Curiosidades';
import Eventos from './pages/Eventos';
import FaunaFlora from './pages/FaunaFlora';
import NossoTrabalho from './pages/NossoTrabalho';
import Trilhas from './pages/Trilhas';
import Cachoeiras from './pages/Cachoeiras';
import Parceiros from './pages/Parceiros';
import FaleConosco from './pages/FaleConosco';
import Denuncie from './pages/Denuncie';
import Mapa from './pages/Mapa';
import Regras from './pages/Regras';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

function App() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Configurações globais de scroll se necessário
    });
    return () => ctx.revert();
  }, []);

  return (
    <Router>
      <div className="relative bg-off-white min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/preservacao" element={<Preservacao />} />
            <Route path="/pontos-turisticos" element={<PontosTuristicos />} />
            <Route path="/curiosidades" element={<Curiosidades />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/fauna-flora" element={<FaunaFlora />} />
            <Route path="/nosso-trabalho" element={<NossoTrabalho />} />
            <Route path="/trilhas" element={<Trilhas />} />
            <Route path="/cachoeiras" element={<Cachoeiras />} />
            <Route path="/parceiros" element={<Parceiros />} />
            <Route path="/fale-conosco" element={<FaleConosco />} />
            <Route path="/denuncie" element={<Denuncie />} />
            <Route path="/mapa" element={<Mapa />} />
            <Route path="/regras" element={<Regras />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;