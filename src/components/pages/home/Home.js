import Background from '../../Background';
import Menu from '../../Menu';
import LayAltheman from '../../LayAltheman';
import MenuActive from '../../MenuActive';

import '../../styles/Background.css';
import '../../styles/Menu.css';
import '../../styles/LayAltheman.css';
import '../../styles/MenuActive.css';

function Home() {
    return (
        <>
            <Background />
            <MenuActive />
            <Menu />
            <LayAltheman />
        </>
    );
}

export default Home;