import {Form, useForm} from "react-hook-form"
import Botao from "../components/Botao";

function FomPerfil() {
    const {register, handleSubmit, formState:{errors}} = useForm();
    
    return (
        <form onSubmit={handleSubmit((data) => {})}>
            <InputNome register={register} error={errors.name}/>
            <InputEmail register={register} error={errors.email}/>
            <InputSenha register={register} error={errors.senha} />
            <Botao texto="Salvar" />
        </form>

    );
}

export default FomPerfil;