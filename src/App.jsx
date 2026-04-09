import "./App.css";

import { Logo } from "./components/Logo/Logo";
import { Navbar } from "./components/Navbar/Navbar";
import { Temperature } from "./components/Temperature/Temperature";
import { Weather } from "./components/Weather/Weather";

function App() {
  return (
    <div className="app">
      <Logo />
      <Navbar />
      <Temperature />
      <Weather />
    </div>
  );
}

export default App;
