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

  const searchResults = items.filter(item => {
    const title = item.title.toLowerCase();
    const value = searchValue.toLowerCase();

    return (
      title.includes(value) && searchValue !== ""
    );
  });

  return (
    <div className="search">
      <input
        className="search__input"
        type="search"
        value={searchValue}
        onChange={handleSearchValue}
        placeholder="Поиск..."
      />

      {searchValue.length > 0 && (
        <ul className="search__results">
          {searchResults.map(item => {
            return (
              <li
                key={item.id}
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
      )}
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
