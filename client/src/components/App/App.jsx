import { useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Hero from "../Hero/Hero.jsx";

function App() {
  return (
    <div className="page__background-img">
      <div className="app">
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default App;
