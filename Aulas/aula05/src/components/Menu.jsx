function Menu(props) {
  const opcoes = [
      { rota: "/home", texto: "Home" },
      { rota: "/perfil", texto: "Perfil" },
      { rota: "/login", texto: "Sair" },
  ];
  return (
    <nav>
      <ul>
        {opcoes.map((opcoes, index) => (
          <li kay={index}>
            <a href={opcoes.rota}>{opcoes.texto}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Menu;
