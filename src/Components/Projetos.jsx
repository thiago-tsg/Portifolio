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
        descricao: "Academia de artes marciais.",
        imagens: [
            fightMobile,
            fightDesktop,
            fightTablet,
        ],
        link: "https://www.fight4life.com.br/",
        github: "https://github.com/thiago-tsg/Fight-For-Life",
        case: {
            problema: "A academia não possuía um sistema digital estruturado para aquisição e gestão de produtos e conteudos, limitando vendas e automação de processos.",

            solucao: "Desenvolvi uma plataforma completa com foco em conversão e escalabilidade, incluindo sistema de autenticação, área do aluno, e-commerce para planos e produtos, e integração com pagamentos. O projeto também priorizou performance, UX e animações modernas para retenção do usuário.",

            tecnologias: "React (Vite), Firebase, Node.js, SCSS, Integração de pagamentos, Autenticação segura (JWT / Firebase Auth)"
        },
    },

    //Timer Fight
    {
        nome: "Timer Fight",
        descricao: "Timer para Academias e Personal.",
        imagens: [
            TimerFightMobile,
            TimerFightDesktop,
            TimerFightTablet,
        ],
        link: "https://github.com/thiago-tsg/Timer-Fight/",
        github: "https://github.com/thiago-tsg/Timer-Fight/",
        case: {
            problema: "Desenvolvimento em uma linguagem nova, até o momento usava apenas react vite, focado para web.",

            solucao: "Entreguei um aplicativo com diversas funcionalidades, sanando a dor do publico, algumas delas são: Logotipo da academia ou personal, personalização de sons, quantidade de rounds e etc.",

            tecnologias: "React Native, JavaScript, TS, TSX, Gulp, Firebase, API Rest, Git, Git Hub, Node.js."
        }
    },

    // Planeta Kids
    {
        nome: "Planeta Kids",
        descricao: "Buffet infantil Planeta Kids.",
        imagens: [
            planetaMobile,
            planetaDesktop,
            planetaTablet,
        ],
        link: "https://www.planetakids.com.br/",
        github: "https://github.com/repos",
        case: {
            problema: "Necessidade de entregar um site institucional em curto prazo, mantendo alinhamento com identidade visual do cliente.",

            solucao: "Desenvolvi uma interface otimizada para conversão, com foco em experiência visual e direcionamento estratégico para contato via WhatsApp, principal canal de vendas do cliente.",

            tecnologias: "HTML, SCSS, JavaScript, Gulp"
        }
    },

    // Palazzo Prado
    {
        nome: "Palazzo Prado",
        descricao: "Buffet Pallazo Prado.",
        imagens: [
            palazzoMobile,
            palazzoDesktop,
            palazzoTablet,
        ],
        link: "https://www.palazzoprado.com.br/",
        github: "https://github.com/thiago-tsg/Palazzo-Prado",
        case: {
            problema: "Necessidade de entregar um site institucional em curto prazo, mantendo alinhamento com identidade visual do cliente.",

            solucao: "Desenvolvi uma interface otimizada para conversão, com foco em experiência visual e direcionamento estratégico para contato via WhatsApp, principal canal de vendas do cliente.",

            tecnologias: "HTML, SCSS, JavaScript, Gulp"
        }
    },

    //   Tecna
    {
        nome: "Tecna",
        descricao: "Agencia de marketing digital.",
        imagens: [
            tecnaMobile,
            tecnaDesktop,
            tecnaTablet,
        ],
        link: "https://tecna.com.br/",
        github: " https://github.com/thiago-tsg/Tecna",
        case: {
            problema: "Desenvolvimento sob alto nível de exigência estética e técnica, com múltiplas validações e ajustes finos durante o processo.",

            solucao: "Entreguei um site institucional alinhado com o posicionamento da agência, focado em autoridade digital, performance e clareza na comunicação dos serviços.",

            tecnologias: "HTML, SCSS, JavaScript, Gulp"
        }
    },

    //Cimetec
    {
        nome: "Cimetec",
        descricao: "Fabricante de Máquinas CNC.",
        imagens: [
            cimetecMobile,
            cimetecDesktop,
            cimetecTablet,
        ],
        link: "https://thiago-tsg.github.io/Cimetec/",
        github: " https://github.com/thiago-tsg/Cimetec",
        case: {
            problema: "Necessidade de entregar um site institucional em curto prazo, mantendo alinhamento com identidade visual do cliente.",

            solucao: "Desenvolvi uma interface otimizada para conversão, com foco em experiência visual e direcionamento estratégico para contato via WhatsApp, principal canal de vendas do cliente.",

            tecnologias: "HTML, SCSS, JavaScript, Gulp"
        }
    },

    //Santa Clara
    {
        nome: "Santa Clara",
        descricao: "Distribuidor de Projetores Cinematográficos.",
        imagens: [
            santaMobile,
            santaDesktop,
            santaTablet,
        ],
        link: "https://thiago-tsg.github.io/Santa-Clara/",
        github: " https://github.com/thiago-tsg/Santa-Clara",
        case: {
            problema: "Necessidade de entregar um site institucional em curto prazo, mantendo alinhamento com identidade visual do cliente.",

            solucao: "Desenvolvi uma interface otimizada para conversão, com foco em experiência visual e direcionamento estratégico para contato via WhatsApp, principal canal de vendas do cliente.",

            tecnologias: "HTML, SCSS, JavaScript, Gulp"
        }
    },

    //Casa Bertolazzi
    {
        nome: "Casa bertolazzi",
        descricao: "Buffet Casa Bertolazzi.",
        imagens: [
            bertolazziMobile,
            bertolazziDesktop,
            bertolazziTablet,
        ],
        link: "https://casabertolazzi.com.br/",
        github: " https://github.com/thiago-tsg/casa-bertolazzi",
        case: {
            problema: "Necessidade de entregar um site institucional em curto prazo, mantendo alinhamento com identidade visual do cliente.",

            solucao: "Desenvolvi uma interface otimizada para conversão, com foco em experiência visual e direcionamento estratégico para contato via WhatsApp, principal canal de vendas do cliente.",

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
    const [paginaAtual, setPaginaAtual] = useState(0);
    const [cardsPorPagina, setCardsPorPagina] = useState(3);
    const [touchStartProjetos, setTouchStartProjetos] = useState(0);
    const [touchEndProjetos, setTouchEndProjetos] = useState(0);
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
    const handleProjetosTouchStart = (e) => {
        setTouchStartProjetos(e.targetTouches[0].clientX);
    };
    const handleProjetosTouchMove = (e) => {
        setTouchEndProjetos(e.targetTouches[0].clientX);
    };
    const handleProjetosTouchEnd = () => {
        const distance = touchStartProjetos - touchEndProjetos;

        if (distance > 50 && !estaNoFinal) {
            proximaPagina();
        }

        if (distance < -50 && !estaNoInicio) {
            paginaAnterior();
        }
    };
    const totalPaginas = Math.ceil(
        projetos.length / cardsPorPagina
    );
    const estaNoInicio = paginaAtual === 0;
    const estaNoFinal = paginaAtual === totalPaginas - 1;
    const projetosVisiveis = projetos.slice(
        paginaAtual * cardsPorPagina,
        paginaAtual * cardsPorPagina + cardsPorPagina
    );
    const proximaPagina = () => {
        setPaginaAtual((prev) => prev + 1);
    };
    const paginaAnterior = () => {
        setPaginaAtual((prev) => prev - 1);
    };
    const next = () => {
        setIndex((prev) => (prev + 1) % ativo.imagens.length);
    };
    const prev = () => {
        setIndex((prev) =>
            prev === 0 ? ativo.imagens.length - 1 : prev - 1
        );
    };



    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setCardsPorPagina(1);
            } else {
                setCardsPorPagina(3);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

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


    return (
        <section className="cg-projetos container" id="projects">
            <h2 className="title">// Projetos</h2>

            <div className="carousel-controls flex gap-md">

                <button
                    className="btn"
                    onClick={paginaAnterior}
                    disabled={estaNoInicio}
                >
                    ←
                </button>

                <button
                    className="btn"
                    onClick={proximaPagina}
                    disabled={estaNoFinal}
                >
                    →
                </button>

            </div>

            <div
                className="projetos-grid grid3col gap-xl"
                onTouchStart={handleProjetosTouchStart}
                onTouchMove={handleProjetosTouchMove}
                onTouchEnd={handleProjetosTouchEnd}
            >
                {projetosVisiveis.map((proj, i) => (
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
                            <div className="c-img-modal flex-center ">
                                <img src={ativo.imagens[index]} />
                            </div>
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