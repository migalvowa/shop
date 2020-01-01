import React from "react";

import Items from "../../Items/Items";

import "./styles/index.scss";

// ---

const HomePage = () => {
  return (
    <div className="home-page" isHomePage={true}>
      <Items className="home-page__items" />
    </div>
  );
}

export default HomePage;
