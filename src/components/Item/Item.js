import React from "react";
import { Link } from 'react-router-dom';

import Button from "../Button/Button";
import { URL } from "../../constants/api";

import "./styles/index.scss";

// ---

const Item = ({ item }) => {
  return (
    <li className="item">
      <Link className="item__link-text" to={`items/${item.slug}`}>
        {item.title}
      </Link>

      <Link to={`items/${item.slug}`}>
        <img src={`${URL}${item.photos[0].url}`} />
      </Link>

      <span className="item__price">{`${item.price} ₴`}</span>

      <Button className="item__order-btn">Купить</Button>
    </li>
  );
}

export default Item;
