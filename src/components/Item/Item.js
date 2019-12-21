import React from "react";

const Item = ({ item }) => {
  return (
    <li className="item">
      <div className="items__title">
        {item.title}
      </div>

      <img src={item.photos} />
    </li>
  );
}

export default Item;
