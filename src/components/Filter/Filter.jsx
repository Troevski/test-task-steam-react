import React from "react";
import st from "./Filter.module.css";
import { useState } from "react";

const Filter = () => {
  const [isShow, setIsShow] = useState(false);
  // here was code which helped to filter price up-down, down-up(but API price look likes like 25$72$,17 - its bag, so i delete this code from here)
  return (
    <div className={st.filter_}>
      <p>Filters</p>
      <i
        onClick={() => setIsShow(!isShow)}
        style={{ fontSize: 30, cursor: "pointer" }}
        className="bx bx-filter"
      ></i>
      {isShow && (
        <ul className={isShow ? st.menu_filter_show : st.menu_filter}>
          <li className={st.li_menu_filter}>Lower to bigger</li>
          <li className={st.li_menu_filter}>Bigger to lower</li>
        </ul>
      )}
    </div>
  );
};

export default Filter;
