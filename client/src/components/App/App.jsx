import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Hero from "../Hero/Hero.jsx";
import About from "../About/About.jsx";
import Footer from "../Footer/Footer.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";
import SuccessModel from "../SuccessModel/SuccessModel.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  function openModal(name) {
    setActiveModal(name);
  }

  function closeModal() {
    setActiveModal(null);
  }

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
        <LoginModal
          isOpen={activeModal === "login"}
          onClose={closeModal}
          openModal={openModal}
        />

        <RegisterModal
          isOpen={activeModal === "register"}
          onClose={closeModal}
          openModal={openModal}
        />

        <SuccessModel
          isOpen={activeModal === "success"}
          onClose={closeModal}
          openModal={openModal}
        />

        <button onClick={() => openModal("success")}>Test Success Modal</button>
        <button onClick={() => openModal("register")}>
          Test Register Modal
        </button>
        <button onClick={() => openModal("login")}>
          Test login Modal
        </button>
        <Footer />
      </div>
    </>
  );
}
export default App;
