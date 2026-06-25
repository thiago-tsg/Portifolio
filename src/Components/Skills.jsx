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
                    <p>Desenvolvedor Front-End | React.js | JavaScript | HTML | SCSS | Firebase | APIs | Node.js | Git</p>
                    <p>Desenvolvedor focado na criação de interfaces web modernas, responsivas e com boa experiência de usuário, utilizando principalmente React.js, JavaScript, HTML e SCSS.</p>
                    <p>Tenho experiência no desenvolvimento de aplicações integradas com APIs e serviços como Firebase, utilizando recursos de autenticação, banco de dados e armazenamento. Também atuo na integração de gateways e APIs de pagamento, conectando aplicações a serviços bancários e plataformas de cobrança.</p>
                    <p>Possuo conhecimentos em Node.js para criação e manutenção de servidores e rotas de API, o que me permite compreender e participar de etapas além do front-end quando necessário.</p>
                    <p>No dia a dia, utilizo ferramentas como Git, Figma e Photoshop para colaborar no desenvolvimento de produtos digitais, buscando entregar soluções funcionais, organizadas e alinhadas aos objetivos do projeto.</p>
                    <p>Tenho experiência em projetos de e-commerce e aplicações web, sempre com foco em usabilidade, performance e evolução contínua dos produtos.</p>
                    <Link to="/curriculo" className="btn">
                        Curriculo
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Skills