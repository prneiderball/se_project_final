import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Hero from "../Hero/Hero.jsx";
import Results from "../Results/Results.jsx";
import About from "../About/About.jsx";
import Footer from "../Footer/Footer.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";
import SuccessModel from "../SuccessModel/SuccessModel.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  function openModal(name) {
    setActiveModal(name);
  }

  function closeModal() {
    setActiveModal(null);
  }

  function handleSearch(keyword) {
    setError(null);
    setIsLoading(true);
    const apiKey = import.meta.env.VITE_API_KEY;
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const today = new Date();
    const fromDate = new Date();
    fromDate.setDate(today.getDate() - 7);
    const to = today.toISOString().split("T")[0];
    const from = fromDate.toISOString().split("T")[0];
    const url = `${baseUrl}?q=${keyword}&from=${from}&to=${to}&pageSize=100&apiKey=${apiKey}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
        setIsLoading(false);
      });
  }
  return (
    <>
      <div className="page__background-img">
        <Header isLoggedIn={isLoggedIn} openModal={openModal} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero onSearch={handleSearch} />{" "}
              </>
            }
          />
        </Routes>
      </div>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Results
                  articles={articles}
                  isLoading={isLoading}
                  error={error}
                />
                <About />
              </>
            }
          />
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
        <Footer />
      </div>
    </>
  );
}
export default App;
