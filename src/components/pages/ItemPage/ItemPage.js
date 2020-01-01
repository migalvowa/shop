import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import Button from "../../Button/Button";
import { getItem } from "../../../actions/items.action";
import { URL } from "../../../constants/api";

import "./styles/index.scss";

// ---

const ItemPage = ({ getItem, item }) => {
  const { slug } = useParams();

  useEffect(() => {
    getItem(slug);
  }, []);

  const [bigPicture, setBigPicture] = useState(null);

  if (!item) {
    return null;
  }

  const pictures = item.photos;

  if (!bigPicture) {
    setBigPicture(`${URL}${pictures[0].url}`);
  }

  const handleClick = id => {
    const newPicture = pictures.find(item => item.id === id);

    if (!newPicture) {
      return;
    }

    setBigPicture(`${URL}${newPicture.url}`);
  };

  return (
    <div className="item-page">
      <div className="item-page__content">
        <div className="item-page__pictures">
          <img
            src={bigPicture}
            alt={item.title}
          />

          <ul className="item-page__pictures-list">
            {pictures.map(element => {
              return (
                <li
                  className="item-page__pictures-item"
                  key={element.id}
                  onClick={() => handleClick(element.id)}
                >
                  <img
                    src={`${URL}${element.url}`}
                    alt={element.title}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="item-page__description">
          <h1>{item.title}</h1>

          <p>{item.description}</p>

          <Button className="item-page__order-btn">Купить</Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    item: state.item
  };
};

const mapDispatchToProps = {
  getItem
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
