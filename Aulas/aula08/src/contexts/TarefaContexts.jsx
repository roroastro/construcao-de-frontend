import { createContext, useState } from "react";

const TarefaConstext = createContext();

function TarefaProvider(props) {
    const [tarefas, setTarefa] = useState(["Estudar React", "Fazer a pratica"]);

    const incluir = (tarefa) => {
        setTarefa([...tarefas, tarefa]);
    }

    const remover = (tarefa) => {
        setTarefa(tarefas.filter((item) => item != tarefa));
    }

    const contexto = {tarefas, incluir, remover}

    return (<TarefaConstext.Provider value={contexto} >
        {props.children}
    </TarefaConstext.Provider>
    );
}

export {TarefaConstext, TarefaProvider};