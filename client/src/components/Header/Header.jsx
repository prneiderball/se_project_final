import "./Header.css";
import newsExplorerLogo from "../../assets/newsExplorerLogo.svg";

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={newsExplorerLogo}
        alt="News Explorer Logo"
      />
      <div className="header__navigation">
        <button className="header__button header__button--home">Home</button>
        <button className="header__button header__button--signin">
          Sign In
        </button>
      </div>
    </header>
  );
}

export default Header;
