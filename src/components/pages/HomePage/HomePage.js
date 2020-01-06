import React from "react";

import Categories from "../../Categories/Categories";
import Items from "../../Items/Items";

import "./styles/index.scss";

// ---

const HomePage = () => {
  return (
    <div className="home-page">
      <Categories />

      <Items className="home-page__items" />
    </div>
  );
};

export default HomePage;
