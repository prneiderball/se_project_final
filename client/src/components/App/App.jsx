import { useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Hero from "../Hero/Hero.jsx";
import About from "../About/About.jsx";
import Results from "../Results/Results.jsx";

function App() {
  return (
    <div className="app">
      <div className="page__background-img">
        <Header />
        <Hero />
      </div>
      <Results />
      <About />
    </div>
  );
}

export default App;
