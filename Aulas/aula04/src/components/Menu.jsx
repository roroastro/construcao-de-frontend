import Link from "./Link";

function Menu(params) {
  const opcoes = ["Home", "Perfil", "Sair"];
  return (
    <nav>
      <ul>
        {opcoes.map((opcoes, index) => (
          <li key={index}>
            <Link texto={opcoes} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
