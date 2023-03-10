import React from 'react';
import Menu from '../../Menu';
import MenuActive from '../../MenuActive';
import AuthorImg from '../../img/author.jpg';

import '../../styles/Background.css';
import '../../styles/Menu.css';
import '../../styles/MenuActive.css';
import '../../styles/About.css';

function About() {
    return (
    <>
        <Menu />
        <MenuActive />
        <section>
            <div className='titulo'>
                <h1 className='titlePage'>&lt;<span className="blueColor">Sobre</span><span className="purpleColor">Mim</span>/&gt;</h1>
            </div>
            <div id='aboutInfo'>
                <div id='firstPanel'>
                    <div id='authorImg'>
                        <img src={AuthorImg} alt='Imagem do autor'/>
                    </div>
                    <div id='resume'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit erat, facilisis ac nunc eu, viverra congue risus.</p>
                            <br/>
                        <p>Aliquam ultricies, sem sed consectetur mattis, est risus consequat odio, id dignissim magna odio non purus.
                            Fusce faucibus dolor nec elit ultricies fringilla. 
                        </p>
                    </div>
                </div>
            </div>
            <div id='secondPanel'>
                <div id='cards'>
                    <div id='professional'>
                        <p className='cardTitle'>Histórico Profissional</p>
                    </div>
                    <div id='academic'>
                        <p className='cardTitle'>Formação Acadêmica</p>
                    </div>
                    <div id='hobbies'>
                        <p className='cardTitle'>Hobbies</p>
                    </div>
                </div>
            </div>
        </section>

    </>
    );
}

export default About;