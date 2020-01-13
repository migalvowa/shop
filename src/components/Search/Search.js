import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { setSearchValue } from "../../actions/search.action";
import { getItems } from "../../actions/items.action";

import "./styles/index.scss";

// ---

const Search = ({ setSearchValue, getItems, searchValue, items }) => {
  useEffect(() => {
    getItems();
  }, []);

  const handleSearchValue = e => {
    setSearchValue(e.target.value);
  };

  const closeSearchResults = () => {
    setSearchValue("");
  };

  const filteredItems = items.filter(item => {
    return (
      item.title.toLowerCase().includes(searchValue.toLowerCase()) && searchValue !== ""
    );
  });

  return (
    <div className="search">
      <input
        className="search__input"
        type="search"
        value={searchValue}
        onChange={handleSearchValue}
      />

      <ul className="search__results">
        {filteredItems.map(item => {
          return (
            <li
              className="search__results-item"
              onClick={closeSearchResults}
            >
              <Link to={`/items/${item.slug}`}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  searchValue: state.search.searchValue,
  items: state.items.list
});

const mapDispatchToProps = {
  setSearchValue,
  getItems
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
