import "./App.css";

import { Logo } from "./components/Logo/Logo";
import { Navbar } from "./components/Navbar/Navbar";
import { Temperature } from "./components/Temperature/Temperature";

function App() {
  return (
    <div className="app">
      <Logo />
      <Navbar />
      <Temperature />
    </div>
  );
}

export default App;
