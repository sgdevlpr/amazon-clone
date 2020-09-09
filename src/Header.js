import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();

  return (
    <nav className="Header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>
      <div className="Header__search">
        <input type="text" className="Header__searchInput" />
        <SearchIcon className="Header__searchIcon" />
      </div>

      <div className="Header__nav">
        <Link to="/login" className="Header__link">
          <div className="Header__option">
            <span className="Header__optionLineOne">Hello yomna</span>
            <span className="Header__optionLineTwo">Sign in</span>
          </div>
        </Link>

        <Link to="/" className="Header__link">
          <div className="Header__option">
            <span className="Header__optionLineOne">Return</span>
            <span className="Header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="Header__link">
          <div className="Header__option">
            <span className="Header__optionLineOne">Your</span>
            <span className="Header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="Header__link">
          <div className="Header__optionBasket">
            <ShoppingBasketIcon />
            <span className="Header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
