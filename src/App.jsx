import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Service from "./components/service/Service";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";

const App = () => {
  return (
    <>
      <Header></Header>

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Service />
        <Testimonials />
      </main>
    </>
  );
};

export default App;
