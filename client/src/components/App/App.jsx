import "./App.css";
import Header from "../Header/Header.jsx";
import Hero from "../Hero/Hero.jsx";
import About from "../About/About.jsx";
import Footer from "../Footer/Footer.jsx";

function App() {
  return (
    <>
      <div className="page__background-img">
        <Header />
        <Hero />
      </div>
      <div className="app">
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
