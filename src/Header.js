import React from "react";
import "./Header.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <div class="head-top">
        <div className="brand-name">
          <a href="/">
            mega<span>site</span>
            {/* <img
              className="header__logo"
              src="https://cdn.dribbble.com/users/51395/screenshots/5959127/go_4x.jpg?compress=1&resize=1000x750&vertical=top"
            /> */}
          </a>
        </div>

        {/*
      <div className="header__search">
        <input className="header__searchInput" type="text" />

        <SearchIcon className="header__searchIcon" />
      </div>
*/}
        {/*
      <Link to={!user && "/orders"}>
        <div className="header__option">
          <BookmarkBorderIcon />

          {/*<span className="header__optionLineOne">previous</span>
          <span className="header__optionLineTwo">Orders</span>
      
        </div>
      </Link>
      */}
      </div>
      <div className="header__nav">
        <div onClick={handleAuthentication} className="header__option">
          <Link to={"/login"}>
            <AccountCircleIcon />
            {/*if there is no user then take to login page
          /}<div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello, {user ? user.email : "guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
              {/*if user in say sign out else say sign in
            </span> 
        </div>*/}
          </Link>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <AddShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
