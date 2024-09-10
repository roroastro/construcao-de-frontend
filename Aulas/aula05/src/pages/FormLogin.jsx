import { useState } from "react";
import Botao from "../components/botao";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";

function FormLogin(props) {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const aoClicar = (e) => {
    e.preventDefault();
    alert("email:" + email + " senha:" + senha);
  };
  return (
    <>
      <InputEmail valor={email} mudarValor={setEmail} />
      <InputSenha valor={senha} mudarValor={setSenha} />
      <Botao texto="Entrar" aoClicar={aoClicar}/>
    </>
  );
}
export default FormLogin;
