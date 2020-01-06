import React from "react";

import Items from "../../Items/Items";

import "./styles/index.scss";

// ---

const CategoryPage = () => {
  return (
    <div className="category-page">
      <h1>Блокноты</h1>

      <Items />
    </div>
  );
};

export default CategoryPage;
