// Styles
import '../Styles/Footer.scss'

// React
import { useEffect } from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {

    return (
        <section className='cg-footer container'>

            <div className='c-link-footer flex-center gap-xxl'>

                <div className='menu-footer fade-item'>
                    <p>Menu</p>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Project</a></li>
                    </ul>
                </div>

                <div className='rede-social fade-item'>
                    <p>Social</p>
                    <ul>
                        <li>
                            <a href="#"><FaGithub /> GitHub</a>
                        </li>
                        <li>
                            <a href="#"><FaLinkedin /> LinkedIn</a>
                        </li>
                        <li>
                            <a href="#"><FaInstagram /> Instagram</a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className='credito flex-center fade-item'>
                <a href="https://github.com/thiago-tsg" className='center' target="_blank" rel="noopener noreferrer">© 2026 Thiago S.G — Desenvolvedor Full-Stack.</a>
            </div>

        </section>
    )
}

export default Footer