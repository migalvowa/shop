import React from "react";
import { connect } from "react-redux";

import { setSearchValue } from "../../actions/search.action";

import "./styles/index.scss";

// ---

const Search = ({ setSearchValue, searchValue }) => {
  const handleSearchValue = e => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="search">
      <span className="search__title">Поиск</span>

      <input
        className="search__input"
        type="search"
        // value={searchValue}
        onChange={handleSearchValue}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  searchValue: state.search.searchValue
});

const mapDispatchToProps = {
  setSearchValue
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
