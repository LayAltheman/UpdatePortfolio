import { Link } from "react-router-dom";

function MenuActive() {
    return (
        <div id='Navigation'>
            <div id='MenuContent'>
                <ul>
                    <li id='Home'><Link to='/home'>Home</Link></li>
                </ul>
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
        </div>
    );
}

export default MenuActive;