import React, { useState } from "react";
import st from "./Price.module.css";
import moment from "moment";

const Price = ({ getGames, setGetGames }) => {
  const [show, setShow] = useState(false);
  // here was code which helped to filter price (but API price look likes like 25$72$,17 - so,its bag, so  this code working not correct right now
  const sortedByPrice = () => {
    const sorted = [...getGames].sort((a, b) => {
      let sortedA = parseFloat(a.price);
      let sortedB = parseFloat(b.price);
      return sortedA - sortedB;
    });
    setGetGames(sorted);
  };

  const sortedByPublishDate = () => {
    const sortedByDate = [...getGames].sort((a, b) => {
      let sortA = moment(a.released).valueOf();
      let sortB = moment(b.released).valueOf();
      return sortA - sortB;
    });
    setGetGames(sortedByDate);
  };

  return (
    <div className={st.price_cont}>
      <div>
        <p>Price</p>
      </div>
      <div>
        <i
          onClick={() => setShow(!show)}
          style={{ cursor: "pointer", fontSize: "25px" }}
          className={show ? "bx bx-chevron-up" : "bx bx-chevron-down"}
        ></i>
      </div>

      {show && (
        <ul className={show ? st.menu_active : st.menu}>
          <li onClick={() => sortedByPrice()} className={st.li_menu}>
            Price
          </li>
          <li onClick={() => sortedByPublishDate()} className={st.li_menu}>
            Publish Date
          </li>
        </ul>
      )}
    </div>
  );
};

export default Price;
{
}
