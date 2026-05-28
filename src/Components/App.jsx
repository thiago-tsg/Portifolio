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

import '../Styles/App.scss'

// ScrollToTop (igual ao seu)
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

// 👇 DETECTA MOBILE
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);

    check(); // inicial
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
};

const App = () => {
  const isMobile = useIsMobile();

  return (
    <HashRouter>

      {/* 👇 SÓ RENDERIZA NO DESKTOP */}
      {!isMobile && <Background />}

      <ScrollToTop />

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

    </HashRouter>
  );
};

export default App;