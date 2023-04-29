import React, { useContext } from "react";
import Card from "../Card/Card";
import st from "./Cards.module.css";
import { SearchContext } from "../Routes/Context";

const Cards = ({ currentGames, handleClick, liked }) => {
  const { search } = useContext(SearchContext);

  return (
    <div className={st.container_cards}>
      {currentGames
        .filter((el) => {
          return el.title.toLowerCase().includes(search?.toLowerCase() || "");
        })
        .map((card) => (
          <Card
            id={card.appId}
            isLiked={card.isLiked}
            key={card.appId}
            img={card.imgUrl}
            price={card.price}
            released={card.released}
            title={card.title}
            liked={liked}
            handleClick={handleClick}
          />
        ))}
    </div>
  );
};

export default Cards;

//TODO при клике на карточку чтобы меня перекидывало на стим интернет магазин с игрой , у каждой карты есть ссылка на это
