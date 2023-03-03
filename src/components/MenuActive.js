import { Link } from "react-router-dom";

function MenuActive() {
    return (
        <nav id='Navigation'>
            <div id='MenuContent'>
                <ul>
                    <li id='About'><Link to='/about'>Sobre Mim</Link></li>
                </ul>
                <ul>
                    <li id='Skills'><Link to='/skills'>Habilidades</Link></li>
                </ul>
                <ul>
                    <li id='Portfolio'><Link to='/portfolio'>Portfolio</Link></li>
                </ul>
                <ul>
                    <li id='Contact'><Link to='/contact'>Contato</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default MenuActive;