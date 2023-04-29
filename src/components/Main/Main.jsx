import React, { useState } from "react";
import Cards from "../Cards/Cards";
import st from "./Main.module.css";
import Pagination from "../Pagination/Pagination";

const Main = ({ getGames, setGetGames, handleClick, liked }) => {
  const [currentPage, setCurrnetPage] = useState(1);
  const [gamesPerPage] = useState(10);

  const lastPage = currentPage * gamesPerPage;
  const firstPage = lastPage - gamesPerPage;
  const currentGames = getGames.slice(firstPage, lastPage);

  return (
    <div className={st.main_container}>
      <Cards
        setGetGames={setGetGames}
        currentGames={currentGames}
        getGames={getGames}
        liked={liked}
        handleClick={handleClick}
      />
      <Pagination
        currentPage={currentPage}
        setCurrnetPage={setCurrnetPage}
        gamesPerPage={gamesPerPage}
        totalCards={getGames.length}
      />
    </div>
  );
};

export default Main;
