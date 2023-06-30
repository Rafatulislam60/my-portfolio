import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Service from "./components/service/Service";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <>
      <Header></Header>

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Service />
      </main>
    </>
  );
};

export default App;
