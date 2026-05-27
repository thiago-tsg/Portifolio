// React
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

// Componentes
import ButtonWhats from './ButtonWhats.jsx'
import Menu from "./Menu.jsx";
import Header from './Header.jsx'
import Skills from './Skills.jsx'
import Projetos from './Projetos.jsx'
import Footer from './Footer.jsx'
import Curriculo from "./Curriculo";

// Styles
import '../Styles/App.scss'


// Responsável por controlar o scroll entre páginas
const ScrollToTop = () => {

  const { pathname, hash } = useLocation();

  useEffect(() => {

    if (hash) {

      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth"
        });
      }

      return;
    }

    window.scrollTo(0, 0);

  }, [pathname, hash]);

  return null;
};

const App = () => {
  return (
    <HashRouter>

      <div className="futuristic-bg">

        <div className="shape triangle" />
        <div className="shape triangle" />
        <div className="shape triangle" />

        <div className="shape circle" />
        <div className="shape circle" />
        <div className="shape circle" />

        <div className="shape rect" />
        <div className="shape rect" />
        <div className="shape rect" />

      </div>

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
  )
}

export default App