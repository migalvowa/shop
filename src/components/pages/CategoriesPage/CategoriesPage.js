import React from "react";

import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import Categories from "../../Categories/Categories";

import "./styles/index.scss";

// ---

const CategoriesPage = () => {
  const title = "Каталог";

  return (
    <div className="categories-page">
      <Breadcrumbs items={[{ title }]} />

      <h1>{title}</h1>

      <Categories />
    </div>
  );
};

export default CategoriesPage;
