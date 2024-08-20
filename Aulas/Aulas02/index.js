const root = document.getElementById("root");
/* Componentes */
function Cabecalho(){
    const header = document.createElement("header");
    return header;
}

function conteudo(){
    const main = document.createElement("main");
    return main;
}
function Rodape(){
    const footer  = document.createElement("footer");
    return footer
}
/*paginas*/
function pageLogin(){
    const conteudo = conteudo();
    const Rodape = Rodape ();
    root.append(conteudo);
}

function PageHome() {
    const Cabecalho = Cabecalho();
    const conteudo = conteudo();
    root.append(Cabecalho, conteudo);
}

pageLogin();