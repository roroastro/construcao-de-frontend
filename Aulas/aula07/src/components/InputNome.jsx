function InputNome(props) {
    const regras ={required: {value: true, message: "Nome é obrigatorio"}, maxLengrh: {value 100, message: "O nome deve ter no máximo 100 caracters"},}
    return (
        <>
        <label htmlFor="nome">Nome</label>
        <input type="text" {...prosp.register("nome", regras)}/>
        {props.error && <p>{props.error.message}</p>}
        </>
    );
}

export default InputNome;