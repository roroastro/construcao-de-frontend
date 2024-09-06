import Rodape from '../components/Rodape'
import Logo from '../components/logo'
import Titulo from '../components/Titulo'
import InputEmail from '../components/InputEmail'
import InputSenha from '../components/InputSenha'
import BotaoEntrar from '../components/Botao'
import Link from '../components/Link'
import Conteudo from '../components/Conteudo'


function Login() {
  return (
    <>
      <Conteudo>
        <Logo imagem="https://www.svgrepo.com/show/520508/student.svg" texto="Logo da Aplicação"/>
        <Titulo texto="Aluno Online"/>
        <InputEmail />
        <InputSenha/>
        <BotaoEntrar texto="Entrar"/>
        <Link texto="Esqueceu a Senha?"/>
      </Conteudo>
      <Rodape />
    </>
  );
}

export default Login;
