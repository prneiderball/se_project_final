import "./Header.css";
import newsExplorerLogo from "../../assets/newsExplorerLogo.svg";

function Header () {
    return (
        <header className="header">
            <img src={newsExplorerLogo} alt="News Explorer Logo" />
        </header>
    )
}

export default Header;