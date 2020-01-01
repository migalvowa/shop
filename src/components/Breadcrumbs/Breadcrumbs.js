import React from "react";
import { Link } from 'react-router-dom';

import "./styles/index.scss";

// ---

const Breadcrumbs = ({ items }) => {
  return (
    <ul className="breadcrumbs">
      <li className="breadcrumbs__item">
        <Link to="/">Главная</Link>
      </li>

      {items.map((item, index) =>
          <li className="breadcrumbs__item" key={index}>
            {index === items.length - 1
              ? item.title
              : (
                <Link to={item.url}>
                  {item.title}
                </Link>
              )}
          </li>
        )}
    </ul>
  );
}

Breadcrumbs.defaultProps = {
  items: [
    {
      title: "Блокнот Подсознание",
      slug: "bloknot-podsoznanie"
    },
    {
      title: "Софт-бук Blue",
      slug: "soft-buk-blue"
    }
  ]
};

export default Breadcrumbs;
