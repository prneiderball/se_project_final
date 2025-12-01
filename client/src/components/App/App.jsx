import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Hero from "../Hero/Hero.jsx";
import About from "../About/About.jsx";
import Footer from "../Footer/Footer.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";

function App() {
  return (
    <>
      <div className="page__background-img">
        <Header />

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