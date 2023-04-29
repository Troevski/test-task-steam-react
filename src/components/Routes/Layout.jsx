import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = ({ getGames, setGetGames }) => {
  return (
    <div>
      <Header getGames={getGames} setGetGames={setGetGames} />
      <Outlet />
    </div>
  );
};

export default Layout;
