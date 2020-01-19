import React from "react";
import { Link } from "react-router-dom";

import "./styles/index.scss";

// ---

const Breadcrumbs = ({ items }) => {
  return (
    <ul className="breadcrumbs">
      <li className="breadcrumbs__item">
        <Link to="/">Главная</Link>
      </li>

      {items.map((item, index) => {
        return (
          <li className="breadcrumbs__item" key={index}>
            {index === items.length - 1
              ? item.title
              : (
                <Link to={item.slug}>
                  {item.title}
                </Link>
              )}
          </li>
        );
      })}
    </ul>
  );
};

Breadcrumbs.defaultProps = {
  items: [],
};

export default Breadcrumbs;
