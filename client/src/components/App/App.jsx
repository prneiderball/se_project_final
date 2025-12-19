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
  const [hasSearched, setHasSearched] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [ searchError, setSearchError ] = useState(null)

  function openModal(name) {
    setActiveModal(name);
  }

  function closeModal() {
    setActiveModal(null);
  }

  function handleSearch(keyword) {
    if (!keyword) {
      setSearchError("Please enter keyword");
      return;
    }
    setSearchError("");
    setHasSearched(true);
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

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles || []);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Sorry, something went wrong.");
        setIsLoading(false);
      });
  }

  function handleSaveArticle(article) {
    saveArticle(article).then((savedArticle) => {
      setSavedArticles((prev) => [...prev, savedArticle]);
    });
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} openModal={openModal} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="page__background-img">
                <Hero onSearch={handleSearch} />
              </div>

              <div className="app">
                <Results
                  articles={articles}
                  isLoading={isLoading}
                  error={error}
                  hasSearched={hasSearched}
                  isLoggedIn={isLoggedIn}
                />
                <About />
              </div>
            </>
          }
        />
        <Route
          path="/saved-news"
          element={
            <div className="app">
              <SavedNews
                savedArticles={savedArticles}
                setSavedArticles={setSavedArticles}
              />
            </div>
          }
        />
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
    </>
  );
}

export default App;
