import React from "react";
import Search from "../Search/Search";
import st from "./Header.module.css";
import logo from "../images/logo.png";
import Filter from "../Filter/Filter";
import Price from "../Price/Price";
import { Link } from "react-router-dom";

const Header = ({ getGames, setGetGames }) => {
  return (
    <div className={st.header_wrapper}>
      <div className={st.container}>
        <Link to="/">
          <img
            style={{ height: 50, width: 50, cursor: "pointer" }}
            src={logo}
            alt="logo"
          />
        </Link>
        <Search />
        <div className={st.user_int}>
          <Filter />
          <Price getGames={getGames} setGetGames={setGetGames} />
          <div className={st.search_cont}>
            <Link className={st.like_list} to="like-list">
              <p>Like List</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
