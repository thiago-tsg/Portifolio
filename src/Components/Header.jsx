// React
import { useState, useEffect } from "react";

// Imagens
import persona from '../assets/persona.webp'

// Ícones
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";

// Componentes

// Styles
import '../Styles/Header.scss';

const Header = () => {

    // Texto de digitação para o efeito de máquina de escrever
    const fullText = "Transformo ideias em aplicações web modernas, rápidas e escaláveis...";
    const [text, setText] = useState("");
    const chars = Array.from(fullText);
    useEffect(() => {
        let i = 0;
        let isDeleting = false;
        let timeout;

        const type = () => {
            if (!isDeleting) {
                // digitando
                setText(chars.slice(0, i).join(""));
                i++;

                if (i > chars.length) {
                    isDeleting = true;
                    timeout = setTimeout(type, 1500); // pausa antes de apagar
                    return;
                }
            } else {
                // apagando
                setText(chars.slice(0, i).join(""));
                i--;

                if (i < 0) {
                    isDeleting = false;
                    i = 0;
                }
            }

            timeout = setTimeout(type, isDeleting ? 30 : 50);
        };

        type();

        return () => clearTimeout(timeout);
    }, []);

    return (
        <section className="cg-header">
            <div className="conteudo-header flex-colum space-between">
                <div className="text-header">
                    <p className="typing">
                        {text}
                        <span className="cursor">|</span>
                    </p>

                    <h1>Thiago Silva Gonçalves</h1>
                </div>

                <div className="c-info-header grid gap-lg">
                    <div className="TelEmail flex-colum gap-p">
                        <p>
                            <span>Cel: </span>
                            <a href="https://wa.me/5511966594071" target="_blank" rel="noopener noreferrer">(11) 96659-4071</a>
                        </p>
                        <p>
                            <span>Email: </span>
                            <a href="mailto:t.goncalves1999@gmail.com">
                                t.goncalves1999@gmail.com
                            </a>
                        </p>
                    </div>

                    <div className="c-img-header flex-center">
                        <img src={persona}
                            alt="Foto de perfil"
                            decoding="async"
                            fetchpriority="high" />
                    </div>

                    <div className="text-qualidade flex-colum gap-xl">
                        <p>
                            Eu crio aplicações web rápidas, escaláveis e fáceis de usar com frameworks JavaScript modernos — combinando React no frontend com soluções robustas no servidor usando Node.js.
                        </p>

                        <div className="social flex space-between">
                            <a href="https://github.com/thiago-tsg" target="_blank" rel="noopener noreferrer" aria-label="Github de Thiago">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/tsg-view" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Thiago">
                                <FaLinkedin />
                            </a>
                            <a href="https://wa.me/5511966594071" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp de Thiago">
                                <FaWhatsapp />
                            </a>
                            <a href="https://www.instagram.com/thiago_sg/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Thiago">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header