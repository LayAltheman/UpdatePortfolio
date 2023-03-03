import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import About from './pages/about/About'
import Contact from './pages/contact/Contact';
import Portfolio from './pages/portfolio/Portfolio';
import Skills from './pages/skills/Skills';

function Rotas() {
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/skills' element={<Skills />} />
    </Routes>
}

export default Rotas;