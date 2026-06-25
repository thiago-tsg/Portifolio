import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Styles
import '../Styles/Menu.scss';

const Menu = () => {
    // Estado para controlar a abertura do menu
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <section className="cg-menu space-between flex-center">
            <Link
                to="/"
                className="logo"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                <h1>Thiago S.G</h1>
            </Link>

            <div className="menu-wrapper">
                <button className="btn" onClick={() => setOpen(!open)}>
                    <span className="menu-text">Menu</span>
                    <span className={`code-icon ${open ? "open" : ""}`}>
                        {open ? "</>" : "<>"}
                    </span>
                </button>

                <nav className={`c-menu ${open ? "open" : ""}`}>
                    <ul className="flex-colum gap-p">

                        <li>
                            <Link to="/" onClick={() => setOpen(false)}>
                                Inicio
                            </Link>
                        </li>

                        <li>
                            <Link to="/curriculo" onClick={() => setOpen(false)}>
                                Curriculo
                            </Link>
                        </li>

                        <li>
                            <Link to="/#projects" onClick={() => setOpen(false)}>
                                Projetos
                            </Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </section>
    );
}

export default Menu