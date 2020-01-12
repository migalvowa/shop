import React from "react";

import Categories from "../../Categories/Categories";
import Items from "../../Items/Items";

import "./styles/index.scss";

// ---

const HomePage = () => {
  return (
    <div className="home-page">
      <section>
        <h2>Категории</h2>

        <Categories />
      </section>

      <section className="home-page__items-holder">
        <h2>Товары</h2>

        <Items className="home-page__items" />
      </section>
    </div>
  );
};

export default HomePage;
