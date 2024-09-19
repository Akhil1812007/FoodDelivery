import { useState } from "react";
import { LOGO_URL } from "../utils/contents";

const Header = () => {

    const[btnLogin,setBtnLogin]=useState("login")
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
            <li className="header__nav-item"><button  className="filter-btn home">
              Home</button></li>
              <li className="header__nav-item"><button  className="filter-btn about">
              About</button></li>
              <li className="header__nav-item"><button  className="filter-btn offers">
              offers</button></li>
              <li className="header__nav-item"><button  className="filter-btn  cart">
              cart</button></li>
              <li className="header__nav-item"><button  className="filter-btn  login" onClick={
                ()=>{
                  btnLogin==="logout"?setBtnLogin("login"):setBtnLogin("logout");
                }
              }>
              {btnLogin}</button></li>
          </ul>
        </nav>
      </header>
    );
  };

  export default Header;