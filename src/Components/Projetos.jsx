// Styles
import "../Styles/Projetos.scss";

// React
import { useEffect, useState } from "react";

// Imagens

// F4L
import fightDesktop from '../assets/projetos/desktop-fight-for-life.png'
import fightTablet from '../assets/projetos/tablet-fight-for-life.png'
import fightMobile from '../assets/projetos/mobile-fight-for-life.png'

// Palazzo Prado
import palazzoDesktop from '../assets/projetos/desktop-palazzo-prado.png'
import palazzoTablet from '../assets/projetos/tablet-palazzo-prado.png'
import palazzoMobile from '../assets/projetos/mobile-palazzo-prado.png'

// Planeta Kids
import planetaDesktop from '../assets/projetos/desktop-planeta-kids.png'
import planetaTablet from '../assets/projetos/tablet-planeta-kids.png'
import planetaMobile from '../assets/projetos/mobile-planeta-kids.png'

// Tecna
import tecnaDesktop from '../assets/projetos/desktop-tecna.png'
import tecnaTablet from '../assets/projetos/tablet-tecna.png'
import tecnaMobile from '../assets/projetos/mobile-tecna.png'

// Cimetec
import cimetecDesktop from '../assets/projetos/desktop-cimetec.png'
import cimetecTablet from '../assets/projetos/tablet-cimetec.png'
import cimetecMobile from '../assets/projetos/mobile-cimetec.png'

// Santa Clara
import santaDesktop from '../assets/projetos/desktop-santa-clara.png'
import santaTablet from '../assets/projetos/tablet-santa-clara.png'
import santaMobile from '../assets/projetos/mobile-santa-clara.png'

// Casa Bertolazzi
import bertolazziDesktop from '../assets/projetos/desktop-casa-bertolazzi.png'
import bertolazziTablet from '../assets/projetos/tablet-casa-bertolazzi.png'
import bertolazziMobile from '../assets/projetos/mobile-casa-bertolazzi.png'

// Timer Fight
import TimerFightDesktop from '../assets/projetos/desktop-timer-fight.png'
import TimerFightTablet from '../assets/projetos/tablet-timer-fight.png'
import TimerFightMobile from '../assets/projetos/mobile-timer-fight.png'

// Dados dos projetos
const projetos = [
    // F4L
    {
        nome: "Fight For Life",
        descricao: "Academia de lutas.",
        imagens: [
            fightDesktop,
            fightTablet,
            fightMobile,
        ],
        link: "https://www.fight4life.com.br/",
        github: "#",
        case: {
            problema: "A academia não possuía um sistema digital estruturado para aquisição e gestão de alunos, limitando vendas e automação de processos.",

            solucao: "Desenvolvi uma plataforma completa com foco em conversão e escalabilidade, incluindo sistema de autenticação, área do aluno, e-commerce para planos e integração com pagamentos. O projeto também priorizou performance, UX e animações modernas para retenção do usuário.",

            tecnologias: "React (Vite), Firebase, Node.js, SCSS, Integração de pagamentos, Autenticação segura (JWT / Firebase Auth)"
        },
    },

    // Palazzo Prado
    {
        nome: "Palazzo Prado",
        descricao: "Buffet Pallazo Prado.",
        imagens: [
            palazzoDesktop,
            palazzoTablet,
            palazzoMobile,
        ],
        link: "https://www.palazzoprado.com.br/",
        github: "https://thiago-tsg.github.io/Palazzo-Prado/",
        case: {
            problema: "Necessidade de entregar um site institucional de alto padrão em curto prazo, mantendo alinhamento com identidade visual sofisticada do cliente.",

            solucao: "Desenvolvi uma interface elegante e otimizada para conversão, com foco em experiência visual e direcionamento estratégico para contato via WhatsApp, principal canal de vendas do cliente.",

            tecnologias: "HTML, SCSS, JavaScript, Gulp"
        }
    },

    // Planeta Kids
    {
        nome: "Planeta Kids",
        descricao: "Buffet infantil Planeta Kids.",
        imagens: [
            planetaDesktop,
            planetaTablet,
            planetaMobile,
        ],
        link: "https://www.planetakids.com.br/",
        github: "#",
        case: {
            problema: "Site institucional com baixa atratividade para o público infantil e responsáveis, impactando o engajamento.",

            solucao: "Criei uma experiência visual mais dinâmica e amigável, com foco em cores, interação e clareza nas informações, facilitando o processo de decisão dos clientes.",

            tecnologias: "HTML, SCSS, JavaScript, Gulp"
        }
    },

    //   Tecna
    {
        nome: "Tecna",
        descricao: "Agencia de marketing digital.",
        imagens: [
            tecnaDesktop,
            tecnaTablet,
            tecnaMobile,
        ],
        link: "https://tecna.com.br/",
        github: " https://thiago-tsg.github.io/Tecna/",
        case: {
            problema: "Desenvolvimento sob alto nível de exigência estética e técnica, com múltiplas validações e ajustes finos durante o processo.",

            solucao: "Entreguei um site institucional alinhado com o posicionamento da agência, focado em autoridade digital, performance e clareza na comunicação dos serviços.",

            tecnologias: "HTML, SCSS, JavaScript, Gulp"
        }
    },

    //Cimetec
    {
        nome: "Cimetec",
        descricao: "Fabricante de poltronas para cinema.",
        imagens: [
            cimetecDesktop,
            cimetecTablet,
            cimetecMobile,
        ],
        link: "#",
        github: " https://thiago-tsg.github.io/Cimetec/",
        case: {
            problema: "Desenvolvimento sob alto nível de exigência estética e técnica, com múltiplas validações e ajustes finos durante o processo.",

            solucao: "Entreguei um site institucional alinhado com o posicionamento da agência, focado em autoridade digital, performance e clareza na comunicação dos serviços.",

            tecnologias: "HTML, SCSS, JavaScript, Gulp"
        }
    },

    //Santa Clara
    {
        nome: "Santa Clara",
        descricao: "Fabricante de poltronas para cinema.",
        imagens: [
            santaDesktop,
            santaTablet,
            santaMobile,
        ],
        link: "#",
        github: " https://thiago-tsg.github.io/santa-clara/",
        case: {
            problema: "Desenvolvimento sob alto nível de exigência estética e técnica, com múltiplas validações e ajustes finos durante o processo.",

            solucao: "Entreguei um site institucional alinhado com o posicionamento da agência, focado em autoridade digital, performance e clareza na comunicação dos serviços.",

            tecnologias: "HTML, SCSS, JavaScript, Gulp"
        }
    },

    //Casa Bertolazzi
    {
        nome: "Casa bertolazzi",
        descricao: "Fabricante de poltronas para cinema.",
        imagens: [
            bertolazziDesktop,
            bertolazziTablet,
            bertolazziMobile,
        ],
        link: "#",
        github: " https://thiago-tsg.github.io/casa-bertolazzi/",
        case: {
            problema: "Desenvolvimento sob alto nível de exigência estética e técnica, com múltiplas validações e ajustes finos durante o processo.",

            solucao: "Entreguei um site institucional alinhado com o posicionamento da agência, focado em autoridade digital, performance e clareza na comunicação dos serviços.",

            tecnologias: "HTML, SCSS, JavaScript, Gulp"
        }
    },

    //Timer Fight
    {
        nome: "Timer Fight",
        descricao: "Fabricante de poltronas para cinema.",
        imagens: [
            TimerFightDesktop,
            TimerFightTablet,
            TimerFightMobile,
        ],
        link: "#",
        github: "https://github.com/thiago-tsg/Timer-Fight/",
        case: {
            problema: "Desenvolvimento sob alto nível de exigência estética e técnica, com múltiplas validações e ajustes finos durante o processo.",

            solucao: "Entreguei um site institucional alinhado com o posicionamento da agência, focado em autoridade digital, performance e clareza na comunicação dos serviços.",

            tecnologias: "HTML, SCSS, JavaScript, Gulp"
        }
    },
];

const Projetos = () => {
    const [ativo, setAtivo] = useState(null);
    const [index, setIndex] = useState(0);
    const [caseAtivo, setCaseAtivo] = useState(null);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };
    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };
    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            next();
        }

        if (touchStart - touchEnd < -50) {
            prev();
        }
    };

    // Intersection Observer para animação de entrada e efeito de brilho no cursor nos cards
    useEffect(() => {
        const cards = document.querySelectorAll(".projeto-card");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );

        cards.forEach((card) => observer.observe(card));

        const handleMouseMove = (e) => {
            const rect = e.currentTarget.getBoundingClientRect();

            e.currentTarget.style.setProperty(
                "--x",
                `${e.clientX - rect.left}px`
            );

            e.currentTarget.style.setProperty(
                "--y",
                `${e.clientY - rect.top}px`
            );
        };

        cards.forEach((card) => {
            card.addEventListener("mousemove", handleMouseMove);
        });

        return () => {
            observer.disconnect();

            cards.forEach((card) => {
                card.removeEventListener("mousemove", handleMouseMove);
            });
        };
    }, []);

    // Fechar modais com ESC
    useEffect(() => {
        if (!ativo && !caseAtivo) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setAtivo(null);
                setCaseAtivo(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [ativo, caseAtivo]);

    // Funções para navegação do carrossel de imagens no modal
    const next = () => {
        setIndex((prev) => (prev + 1) % ativo.imagens.length);
    };

    const prev = () => {
        setIndex((prev) =>
            prev === 0 ? ativo.imagens.length - 1 : prev - 1
        );
    };

    return (
        <section className="cg-projetos container" id="projects">
            <h2 className="title">// Projetos</h2>

            <div className="projetos-grid grid3col gap-xl">
                {projetos.map((proj, i) => (
                    <div
                        className="projeto-card flex-center"
                        key={i}
                        style={{ transitionDelay: `${i * 0.1}s` }}
                        onClick={() => {
                            setAtivo(proj);
                            setIndex(0);
                        }}
                    >
                        <img src={proj.imagens[0]} alt={proj.nome} />

                        <div className="overlay">
                            <h3>{proj.nome}</h3>
                            <p>{proj.descricao}</p>
                            <button className="btn">Ver projeto</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* MODAL PRINCIPAL */}
            {ativo && (
                <div className="modal flex-center" onClick={() => setAtivo(null)}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="close-btn"
                            onClick={() => setAtivo(null)}
                        >
                            X
                        </button>
                        <h2>{ativo.nome}</h2>

                        <div
                            className="carousel"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <button className="prev btn" onClick={prev}>
                                ‹
                            </button>
                            <img src={ativo.imagens[index]} />
                            <button className="next btn" onClick={next}>
                                ›
                            </button>
                        </div>

                        <p>{ativo.descricao}</p>

                        <div className="actions flex gap-md">
                            <a href={ativo.link} target="_blank" className="btn">
                                🚀 Ver projeto
                            </a>

                            <a href={ativo.github} target="_blank" className="btn">
                                💻 GitHub
                            </a>

                            {/* ✅ CORRETO */}
                            <button
                                onClick={() => {
                                    setAtivo(null);
                                    setCaseAtivo(ativo);
                                }}
                                className="btn"
                            >
                                📖 Case
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* MODAL CASE */}
            {caseAtivo && (
                <div className="modal flex-center" onClick={() => setCaseAtivo(null)}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex-center flex-colum">
                            <h2>{caseAtivo.nome}</h2>
                            <div className="case-content">
                                <div>
                                    <h3>🚨 Problema</h3>
                                    <p>{caseAtivo.case.problema}</p>
                                </div>
                                <div>
                                    <h3>💡 Solução</h3>
                                    <p>{caseAtivo.case.solucao}</p>
                                </div>
                                <div>
                                    <h3>⚙️ Tecnologias</h3>
                                    <div className="techs">
                                        {caseAtivo.case.tecnologias.split(",").map((tech, i) => (
                                            <span key={i}>{tech.trim()}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            className="close-btn"
                            onClick={() => setCaseAtivo(null)}
                        >
                            X
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projetos;