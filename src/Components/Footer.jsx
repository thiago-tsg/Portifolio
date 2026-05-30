import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// Styles
import "../Styles/Footer.scss";

const Footer = () => {
    return (
        <section className="cg-footer container">
            <div className="c-link-footer flex-center gap-xxl">

                <div className="menu-footer fade-item">
                    <p>Menu</p>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/curriculo">Curriculo</Link></li>
                        <li><Link to="/#projects">Projetos</Link></li>
                    </ul>
                </div>

                <div className="rede-social fade-item">
                    <p>Social</p>
                    <ul>
                        <li>
                            <a
                                href="https://github.com/thiago-tsg"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub /> GitHub
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.linkedin.com/in/tsg-view"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin /> LinkedIn
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.instagram.com/thiago_sg/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram /> Instagram
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="credito flex-center fade-item">
                <a
                    href="https://github.com/thiago-tsg"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    © 2026 Thiago S.G — Desenvolvedor Full-Stack.
                </a>
            </div>
        </section>
    );
};

export default Footer;