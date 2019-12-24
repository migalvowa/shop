import React from "react";
import { Link } from 'react-router-dom';

import "./styles/index.scss";

// ---

const Item = ({ item }) => {
  return (
    <li className="item">
      <Link to={`items/${item.slug}`}>{item.title}</Link>

      <img src={item.photos["01"]} />
    </li>
  );
}

export default Item;
