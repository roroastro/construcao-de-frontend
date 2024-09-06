import InputPesqueisar from "./inputPsqueisar";
import Logo from "./logo";
import Titulo from "./Titulo";

function Cabecalho(params) {
    return(
        <header>
            <Logo imagem ="" texto=""/>
            <Titulo texto="Aluno Online"/>
            <InputPesqueisar />
            <Logo imagem="" texto="Icone de Pesquisar"/>
        </header>
    );
}

export default Cabecalho;