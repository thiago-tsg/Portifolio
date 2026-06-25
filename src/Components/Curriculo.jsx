// Styles
import "../Styles/Curriculo.scss";

// React
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";

const Curriculo = () => {
    const navigate = useNavigate();

    // Efeito para revelar os blocos ao rolar a página
    useEffect(() => {
        const elements = document.querySelectorAll(".reveal");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="cg-curriculo container flex-colum">

            {/* BOTÃO VOLTAR */}
            <button className="btn" onClick={() => {
                navigate("/");
                setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }, 100);
            }}>
                <FaArrowLeft />
            </button>

            {/* TOPO */}
            <div className="topo">
                <h1 className="center">Thiago Silva Gonçalves</h1>
                <p className="cargo center">Desenvolvedor Full-Stack</p>

                <ul className="contato flex-center gap-xxl">
                    <li>📍 São Paulo - SP</li>
                    <li>📞 (11) 95360-6595</li>
                    <li>✉️ thiagosg.div@gmail.com</li>
                </ul>
            </div>

            {/* GRID */}
            <div className="grid-curriculo grid2col gap-xxl">

                {/* ESQUERDA */}
                <div className="coluna flex-colum gap-xl">

                    <div className="bloco reveal">
                        <h2>Objetivo</h2>
                        <p>
                            Atuar no desenvolvimento de aplicações web modernas utilizando React.js e JavaScript, contribuindo na construção de interfaces responsivas, integração com APIs, autenticação, banco de dados com Firebase e soluções voltadas para performance e usabilidade.
                        </p>
                    </div>

                    <div className="bloco reveal">
                        <h2>Resumo</h2>
                        <p>
                            Desenvolvedor Front-End com experiência no desenvolvimento de aplicações web utilizando React.js, JavaScript, HTML e SCSS. Atuo na criação de interfaces responsivas, integração com APIs e implementação de funcionalidades utilizando Firebase para autenticação e banco de dados. Possuo conhecimentos em Node.js para criação de servidores e suporte a integrações, contribuindo para o desenvolvimento de soluções web focadas em usabilidade, performance e manutenção de código.
                        </p>
                    </div>

                    <div className="bloco reveal">
                        <h2>Formação</h2>
                        <p>Ensino Médio Completo – E.E Deputado Silva Prado (2019)</p>
                    </div>

                    <div className="bloco reveal">
                        <h2>Cursos</h2>
                        <ul className="flex-colum gap-md">
                            <li>Rocketseat – HTML, SCSS, JS (2024)</li>
                            <li>Rocketseat – Git e GitHub (2024)</li>
                            <li>Curso em Vídeo – JS e Web (2024)</li>
                            <li>Udemy – JS Avançado (2024)</li>
                            <li>Google – HTML/SCSS (2022)</li>
                        </ul>
                    </div>

                    <div className="bloco reveal">
                        <h2>Ferramentas</h2>
                        <div className="skills flex gap-md">
                            <span>Git</span>
                            <span>GitHub</span>
                            <span>Figma</span>
                            <span>Photoshop</span>
                            <span>Render</span>
                        </div>
                    </div>

                </div>

                {/* DIREITA */}
                <div className="coluna flex-colum gap-xl">

                    <div className="bloco reveal">
                        <h2>Experiência</h2>

                        <div className="item">
                            <h3>Tecna Soluções Digitais</h3>
                            <span>Front-end | 2024 - 2025</span>
                            <ul>
                                <li>React + Node.js</li>
                                <li>APIs REST e banco de dados</li>
                                <li>Componentização e performance</li>
                            </ul>
                        </div>

                        <div className="item">
                            <h3>Agency CodeBr</h3>
                            <span>Front-end | 2022 - 2024</span>
                            <ul>
                                <li>Aplicações responsivas</li>
                                <li>Autenticação e APIs</li>
                            </ul>
                        </div>

                        <div className="item">
                            <h3>BrJoy Tecnologia</h3>
                            <span>Gestor de Projetos | 2020 - 2022</span>
                            <ul>
                                <li>Gestão de projetos web</li>
                                <li>WordPress + JS</li>
                                <li>Coordenação de equipe</li>
                            </ul>
                        </div>

                    </div>

                    <div className="bloco reveal">
                        <h2>Conhecimentos Técnicos</h2>
                        <div className="skills">
                            <span>React</span>
                            <span>JavaScript</span>
                            <span>Node.js</span>
                            <span>Firebase</span>
                            <span>APIs REST</span>
                            <span>WordPress</span>
                        </div>
                    </div>

                    <div className="bloco reveal">
                        <h2>Experiência Adicional</h2>

                        <div className="item">
                            <h3>DHL / Mercado Livre</h3>
                            <span>Logística</span>
                        </div>

                        <div className="item">
                            <h3>Galpão Autopeças</h3>
                            <span>Estoquista</span>
                        </div>

                        <div className="item">
                            <h3>Sintel Máquinas</h3>
                            <span>Auxiliar Administrativo</span>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Curriculo;