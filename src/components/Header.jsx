import "../CSS/Header.css"

const Header = () => {
    return(
        <div>
           <nav className="containerNav">
                <a href="#about" className="nav-link">Sobre mi</a>
                <br/>
                <a href="#skills" className="nav-link">Habilidades</a>
                <br/>
                <a href="#projects" className="nav-link">Proyectos</a>
            </nav>
        </div>
    )
}

export default Header