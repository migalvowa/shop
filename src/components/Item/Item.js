import React from "react";
import { Link } from "react-router-dom";

import Button from "../base/Button/Button";
import { BASE_URL } from "../../constants/api";

import "./styles/index.scss";

// ---

const Item = ({ item }) => {
  const itemUrl = `/items/${item.slug}`;

  return (
    <li className="item">
      <Link className="item__link-text" to={itemUrl}>
        {item.title}
      </Link>

      <Link to={itemUrl}>
        <img src={`${BASE_URL}${item.photos[0].url}`} />
      </Link>

      <span className="item__price">Цена: {`${item.price} ₴`}</span>

      <Button className="item__order-btn">Купить</Button>
    </li>
  );
};

export default Item;
