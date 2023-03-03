import Background from "./Background";

function openMenu() {
    const btnMenu = document.querySelector("#MenuBotao");
    const nav = document.querySelector("#Navigation");
    const root = document.querySelector("#root");

    btnMenu.classList.toggle('active');
    nav.classList.toggle('active');
    root.classList.toggle('active');
}

function Menu() {
    return (
        <header id='Cabecalho'>
            <Background />
            <div id='MenuBotao' onClick={openMenu}>
                <div id='barA'></div>
                <div id='barB'></div>
                <div id='barC'></div>
            </div>
        </header>
    );
}

export default Menu;