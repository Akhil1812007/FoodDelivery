import { useState } from "react";
import { LOGO_URL } from "../utils/contents";
import { Link } from "react-router-dom";

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
            <li className="header__nav-item">
              <Link to ="/">
                <button  className="filter-btn home">
                  Home</button>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link to="/about">
              <button  className="filter-btn about">
               
              About
              </button>
              </Link>
              
            </li>
            <li className="header__nav-item">
              <Link to ="/offers">
              <button  className="filter-btn offers">
              offers
              </button>
              </Link>
              
            </li>
              <li className="header__nav-item">
                <Link to="/cart">
                <button  className="filter-btn  cart">
              cart</button>
                </Link>
                </li>
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