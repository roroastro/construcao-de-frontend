import { useContext } from "react";
import { TarefaConstext } from "../contexts/TarefaContexts";
function ListaTarefa() {
    const {tarefas, remover} = useContext(TarefaConstext);
    return (
        <ul>{tarefas.map((item, index) => <li key={index}>{item} <button onClick={() => remover(item)}>Remover</button></li>)}</ul>
    );
}

export default ListaTarefa;