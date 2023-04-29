import React from "react";
import st from "./LikeList.module.css";
import Card from "../Card/Card";

const LikeList = ({ getGames, setGetGames, handleClick, liked }) => {
  return (
    <div className={st.container_delete}>
      {liked &&
        liked.map((card) => (
          <Card
            id={card.appId}
            isLiked={card.isLiked}
            setGetGames={setGetGames}
            getGames={getGames}
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
export default LikeList;
