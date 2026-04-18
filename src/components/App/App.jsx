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
import { searchNews } from "../../utils/newsApi.js";
import { saveArticle, removeArticle } from "../../utils/api.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [searchError, setSearchError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const [currentUser, setCurrentUser] = useState(null);

  function openModal(name) {
    setActiveModal(name);
  }

  function closeModal() {
    setActiveModal(null);
  }

  function handleLogin(e) {
    e.preventDefault();
    const email = e.target.email?.value || "user@example.com";
    const name = e.target.username?.value || email.split("@")[0];
    setCurrentUser({ email, name }); //
    setIsLoggedIn(true);
    closeModal();
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setCurrentUser(null);
  }

  function handleSearch(keyword) {
    if (!keyword) {
      setSearchError("Please enter a keyword");
      return;
    }

    setSearchError("");
    setVisibleCount(3);
    setHasSearched(true);
    setError(null);
    setIsLoading(true);

    searchNews(keyword)
      .then((data) => {
        setArticles(data.articles || []);
      })
      .catch(() => {
        setError(
          "Sorry, something went wrong during the request. Please try again later."
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleSaveArticle(article) {
    saveArticle(article).then((savedArticle) => {
      setSavedArticles((prev) => [...prev, savedArticle]);
    });
  }

  function handleRemoveArticle(articleId) {
    // ← add remove handler
    removeArticle(articleId).then(() => {
      setSavedArticles((prev) => prev.filter((a) => a._id !== articleId));
    });
  }

  return (
    <div className="page">
      <Header
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        openModal={openModal}
        onLogout={handleLogout} // ← pass logout down
      />

      <main className="page__content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="page__background-img">
                  <Hero searchError={searchError} onSearch={handleSearch} />
                </div>

                <div className="app">
                  <Results
                    articles={articles}
                    isLoading={isLoading}
                    error={error}
                    hasSearched={hasSearched}
                    isLoggedIn={isLoggedIn}
                    visibleCount={visibleCount}
                    setVisibleCount={setVisibleCount}
                    savedArticles={savedArticles}
                    onSaveArticle={handleSaveArticle}
                    onRemoveArticle={handleRemoveArticle} // ← pass remove down
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
                  onRemoveArticle={handleRemoveArticle} // ← use handler, not setter
                />
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />

      <LoginModal
        isOpen={activeModal === "login"}
        onClose={closeModal}
        openModal={openModal}
        onSubmit={handleLogin}
      />

      <RegisterModal
        isOpen={activeModal === "register"}
        onClose={closeModal}
        openModal={openModal}
        onSubmit={handleLogin}
      />

      <SuccessModel
        isOpen={activeModal === "success"}
        onClose={closeModal}
        openModal={openModal}
      />
    </div>
  );
}

export default App;
