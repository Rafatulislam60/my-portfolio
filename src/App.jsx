import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import ScrollUp from "./components/scrollup/ScrollUp";
import Service from "./components/service/Service";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";
import Work from "./components/work/Work";

const App = () => {
  return (
    <>
      <Header></Header>

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Service />
        <Work />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
