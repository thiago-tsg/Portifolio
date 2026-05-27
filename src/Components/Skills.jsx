// React
import { FaWordpress, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiFirebase, SiFigma } from "react-icons/si";
import { Link } from "react-router-dom";
import { useEffect } from "react";

// Styles
import '../Styles/Skills.scss'

const Skills = () => {

    // Intersection Observer para animação de entrada e efeito de brilho no cursor nos cards
    useEffect(() => {
        const cards = document.querySelectorAll(".skills__card");

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            { threshold: 0.2 }
        );

        cards.forEach(card => observer.observe(card));

        // cursor glow
        cards.forEach(card => {
            card.addEventListener("mousemove", e => {
                const rect = card.getBoundingClientRect();
                card.style.setProperty("--x", `${e.clientX - rect.left}px`);
                card.style.setProperty("--y", `${e.clientY - rect.top}px`);
            });
        });

    }, []);

    return (
        <section className='cg-main container'>
            <div className="section-skilss-resume flex space-between gap-xl">
                <div className="cg-skills">
                    <h2 className="title">// Skills</h2>
                    <div className="c-skills flex space-between gap-md">
                        <div className="skills__card">
                            <h3>Frontend</h3>
                            <ul>
                                <li><FaHtml5 /> HTML5</li>
                                <li><FaCss3Alt /> CSS3 / SCSS</li>
                                <li><SiJavascript /> JavaScript</li>
                                <li><FaReact /> React.js</li>
                                <li><FaWordpress /> WordPress</li>
                            </ul>
                        </div>
                        <div className="skills__card">
                            <h3>Backend & APIs</h3>
                            <ul>
                                <li><FaNodeJs /> Node.js</li>
                                <li>⚡ Express.js</li>
                                <li><SiFirebase /> Firebase</li>
                            </ul>
                        </div>
                        <div className="skills__card">
                            <h3>Tools & Design</h3>
                            <ul>
                                <li><FaGitAlt /> Git & GitHub</li>
                                <li><SiFigma /> Figma</li>
                                <li>🎨 Photoshop</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="cg-resumo space-between flex-colum">
                    <p>Desenvolvedor Full Stack | React.js | JavaScript | HTML | SCSS | Firebase | APIs | Node.js | Git</p>
                    <p>Desenvolvedor Full Stack com experiência na construção de aplicações web modernas, escaláveis e focadas na experiência do usuário. Atuo com HTML, CSS, JavaScript, React e Nodejs, aplicando boas práticas de arquitetura, componentização e organização de código.</p>
                    <p>Tenho vivência no desenvolvimento e manutenção de interfaces responsivas e performáticas, além de integração com APIs e serviços como Firebase. Participo ativamente de todo o ciclo de desenvolvimento, desde a prototipação até a entrega e otimização contínua das aplicações.</p>
                    <p>Utilizo ferramentas como Git para versionamento e PhotoShop e Figma para alinhamento entre design e desenvolvimento, contribuindo para entregas mais consistentes e eficientes em equipe.</p>
                    <p>Além do foco em Front-End, possuo conhecimentos em Node.js, o que me permite ter uma visão mais completa das aplicações e atuar com maior autonomia na integração com back-end.</p>
                    <p>Minha trajetória inclui projetos em e-commerce e soluções digitais, com foco em melhoria de usabilidade, performance e resultados do produto.</p>
                    <Link to="/curriculo" className="btn">
                        Curriculo
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Skills