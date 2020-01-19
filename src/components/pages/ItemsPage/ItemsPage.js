import React from "react";

import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import Items from "../../Items/Items";

import "./styles/index.scss";

// ---

const ItemsPage = () => {
  const title = "Товары";

  return (
    <div className="items-page">
      <Breadcrumbs items={[{ title }]} />

      <h1>{title}</h1>

      <Items />
    </div>
  );
};

export default ItemsPage;
