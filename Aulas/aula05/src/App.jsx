import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";

function App() {
  const [rota, setRota] = useState ("/home");

  return (
    <>
    {rota === "/login" &&<Login />}
    {rota === "/home" &&<Home />}
    {rota === "/perfil" &&<Perfil />}
    </>
  );
}

export default App;