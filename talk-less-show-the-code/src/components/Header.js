import { LOGO_URL } from "../utils/contents";

const Header = () => {
    return (
      <header className="header">
        <div className="header__logo-container">
          <img
            className="header__logo"
            src={LOGO_URL}
            alt="Logo"
          />
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">Home</li>
            <li className="header__nav-item">About</li>
            <li className="header__nav-item">Offers</li>
            <li className="header__nav-item">Cart</li>
          </ul>
        </nav>
      </header>
    );
  };

  export default Header;