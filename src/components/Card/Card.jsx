import React from "react";
import st from "./Card.module.css";

const Card = ({ id, img, price, title, released, liked, handleClick }) => {
  return (
    <div className={st.card_container}>
      <div>
        <img
          className={st.img_card}
          style={{ width: "100%", height: "100%" }}
          src={img}
          alt="img"
        />
      </div>
      <div className={st.card_text}>
        <p className={st.card_title}>{title}</p>
        <p className={st.card_released}>{released}</p>
        <div className={st.block_price}>
          <p className={st.card_price_}>Price:{price}</p>
          <div onClick={() => handleClick(id)}>
            {liked.find((el) => el.appId === id) ? (
              <i
                className="bx bxs-heart"
                style={{
                  marginRight: "5px",
                  color: "#FF0404",
                  fontSize: "27px",
                  cursor: "pointer",
                }}
              ></i>
            ) : (
              <i
                className="bx bx-heart"
                style={{
                  marginRight: "5px",
                  color: "#FBF8F8",
                  fontSize: "27px",
                  cursor: "pointer",
                }}
              ></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
