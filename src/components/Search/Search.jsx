import st from "./Search.module.css";
import { SearchContext } from "../Routes/Context";
import { useContext } from "react";

const Search = () => {
  const { search, setSearch } = useContext(SearchContext);
  return (
    <div className={st.cont_search}>
      <div className={st.searchInputContainer}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className={st.searchInput}
        />
        <i className="bx bx-search-alt" />
      </div>
    </div>
  );
};

export default Search;
