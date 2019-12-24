import React from "react";
import { Link } from 'react-router-dom';

import "./styles/index.scss";

// ---

const Item = ({ item }) => {
  console.log(item.slug);
  return (
    <li className="item">
      <Link to={item.slug}>{item.title}</Link>

      <img src={item.photos} />
    </li>
  );
}

export default Item;
