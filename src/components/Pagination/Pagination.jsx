import React from "react";
import st from "./Pagination.module.css";
const Pagination = ({
  totalCards,
  gamesPerPage,
  setCurrnetPage,
  currentPage,
}) => {
  const pageNumbers = [];
  const lastPage = Math.ceil(totalCards / gamesPerPage);

  for (let i = 1; i <= lastPage; i++) {
    pageNumbers.push(i);
  }

  const changePage = (id) => {
    setCurrnetPage(id);
  };

  return (
    <div className={st.container_pages}>
      <ul className={st.ul_pages}>
        <i
          onClick={() =>
            setCurrnetPage(
              currentPage === pageNumbers[0] ? pageNumbers[0] : currentPage - 1
            )
          }
          style={{ fontSize: "30px", cursor: "pointer" }}
          className="bx bx-chevron-left"
        ></i>
        {pageNumbers.map((page, idx) => (
          <li
            onClick={() => changePage(page)}
            className={currentPage === page ? st.li_pages_active : st.li_pages}
            key={idx}
          >
            {page}
          </li>
        ))}
        <i
          onClick={() =>
            setCurrnetPage(
              currentPage === lastPage ? lastPage : currentPage + 1
            )
          }
          style={{ fontSize: "30px", cursor: "pointer" }}
          className="bx bx-chevron-right"
        ></i>
      </ul>
    </div>
  );
};

export default Pagination;
