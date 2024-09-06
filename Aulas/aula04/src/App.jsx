import Home from "./pages/Home";
import Login from "./pages/login";

function App() {
  const index = 2;
  return (
    <>
    {index === 1 && <Login/>}
    {index === 2 && <Home />}
    </>
  );
}

export default App;

