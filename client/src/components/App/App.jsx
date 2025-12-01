import "./App.css";
import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Hero from "../Hero/Hero.jsx";
import About from "../About/About.jsx";
import Footer from "../Footer/Footer.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div className="page__background-img">
        <Header isLoggedIn={isLoggedIn} />

        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </div>

      <div className="app">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/saved-news" element={<SavedNews />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}
export default App;