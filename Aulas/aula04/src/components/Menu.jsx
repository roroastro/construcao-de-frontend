import Link from "./Link";

function Menu(params) {
  const opcoes = ["Home", "Perfil", "Sair"];
  return (
    <nav>
      <ul>
        {opcoes.map((opcoes) => (
          <li>
            <Link texto={opcoes} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
