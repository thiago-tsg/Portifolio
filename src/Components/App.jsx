import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Componentes
import ButtonWhats from './ButtonWhats.jsx'
import Menu from "./Menu.jsx";
import Header from './Header.jsx'
import Skills from './Skills.jsx'
import Projetos from './Projetos.jsx'
import Footer from './Footer.jsx'
import Curriculo from "./Curriculo";

import Background from "./Background";

// ScrollToTop (igual ao seu)
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        const element = document.getElementById(hash.replace("#", ""));
        element?.scrollIntoView();
      });
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

const App = () => {

  return (
    <HashRouter>

      {/* 👇 SÓ RENDERIZA NO DESKTOP */}
      <Background />

      <ScrollToTop />

      <main>
        <section>
          <ButtonWhats />
          <Routes>
            <Route path="/" element={
              <>
                <Menu />
                <Header />
                <Skills />
                <Projetos />
              </>
            } />
            <Route path="/curriculo" element={<Curriculo />} />
          </Routes>
          <Footer />
        </section>
      </main>

    </HashRouter>
  );
};

export default App;