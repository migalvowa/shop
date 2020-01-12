import React from "react";
import { Link } from "react-router-dom";

import { BASE_URL } from "../../constants/api";

import "./styles/index.scss";

// ---

const Category = ({ category }) => {
  const categoryUrl = `categories/${category.slug}`;

  return (
    <li className="category">
      <Link className="category__link-text" to={categoryUrl}>
        {category.title}
      </Link>

      <Link to={categoryUrl}>
        <img src={`${BASE_URL}${category.photos[0].url}`} />
      </Link>
    </li>
  );
};

export default Category;
