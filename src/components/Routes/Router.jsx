import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Main from "../Main/Main";
import LikeList from "../LikeList/LikeList";
import { useState, useEffect } from "react";
import uuid4 from "uuid4";
import { SearchContext } from "./Context";

const Router = () => {
  const [search, setSearch] = useState("");
  const [getGames, setGetGames] = useState([]);

  const [liked, setLikes] = useState(
    JSON.parse(localStorage.getItem("games")) || []
  );

  const handleClick = (id) => {
    // находит уже понравившиеся игры
    const el = liked.find((item) => item.appId === id);
    console.log(el);
    if (el) {
      setLikes((prevState) => prevState.filter((el) => el.appId !== id));
    } else {
      const el = getGames.filter((el) => el.appId === id);
      setLikes((prevState) => [...prevState, ...el]);
    }
  };

  useEffect(() => {
    localStorage.setItem("games", JSON.stringify(liked));
  }, [liked]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8d042c0bc9mshbd519350944e343p147f06jsnff7abfdf765a",
        "X-RapidAPI-Host": "steam2.p.rapidapi.com",
      },
    };

    fetch("https://steam2.p.rapidapi.com/search/Counter/page/1", options)
      .then((response) => response.json())
      .then((response) => {
        const newArr = response.map((el) => {
          if (el.appId === undefined) {
            return { ...el, appId: uuid4(), isLiked: false };
          } else {
            return { ...el, isLiked: false };
          }
        });

        setGetGames(newArr);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              getGames={getGames}
              setGetGames={setGetGames}
              setSearch={setSearch}
            />
          }
        >
          <Route
            index
            element={
              <Main
                getGames={getGames}
                setGetGames={setGetGames}
                liked={liked}
                handleClick={handleClick}
              />
            }
          />
          <Route
            path="like-list"
            element={
              <LikeList
                getGames={getGames}
                setGetGames={setGetGames}
                handleClick={handleClick}
                liked={liked}
              />
            }
          />
        </Route>
      </Routes>
    </SearchContext.Provider>
  );
};

export default Router;
