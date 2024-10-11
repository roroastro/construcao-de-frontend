import { TarefaProvider } from "./contexts/TarefaContexts";
import FormTarefa from "./pages/FormTarefa";
import ListaTarefa from "./pages/ListTarefa";

function App() {
  return (
    <TarefaProvider>
    <h1>Lista de tarefas</h1>
    <FormTarefa />
    <ListaTarefa />
    </TarefaProvider>
  );
}

export default App;