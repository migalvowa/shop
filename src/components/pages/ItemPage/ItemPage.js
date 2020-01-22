import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import classNames from "classnames";

import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import Button from "../../base/Button/Button";
import Tabs from "../../Tabs/Tabs";
import { getItem } from "../../../actions/items.action";
import { BASE_URL } from "../../../constants/api";

import "./styles/index.scss";

// ---

const ItemPage = ({ getItem, item }) => {
  const { slug } = useParams();

  useEffect(() => {
    getItem(slug);
  }, [slug]);

  useEffect(() => {
    if (item) {
      const pictures = item.photos;
      setBigPicture(`${BASE_URL}${pictures[0].url}`);
      setActive(pictures[0].id);
    }
  }, [item]);

  const [bigPicture, setBigPicture] = useState(null);
  const [active, setActive] = useState(null);

  if (!item) {
    return null;
  }

  const pictures = item.photos;

  const handleClick = id => {
    const newPicture = pictures.find(item => item.id === id);

    if (!newPicture) {
      return;
    }

    setBigPicture(`${BASE_URL}${newPicture.url}`);

    setActive(id);
  };

  const breadcrumbs = [
    { title: "Товары", slug: "items" },
    { title: item.title }
  ];

  const tabs = [
    {
      title: "Доставка",
      content: `<p><strong>Доставка</strong> осуществялется разными способами:</p>

      <ul>
        <li>- Пешком</li>
        <li>- Бегом</li>
        <li>- Самолетом</li>
      </ul>`
    },
    {
      title: "Оплата",
      content: `<p><strong>Оплата</strong> осуществялется разными способами:</p>

      <ul>
        <li>- Наличными</li>
        <li>- Переводом</li>
      </ul>`
    }
  ];

  return (
    <div className="item-page">
      <Breadcrumbs items={breadcrumbs} />

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
                  className={classNames("item-page__pictures-item", {
                    "item-page__pictures-item--active": active === element.id
                  })}
                  key={element.id}
                  onClick={() => handleClick(element.id)}
                >
                  <img
                    src={`${BASE_URL}${element.url}`}
                    alt={item.title}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="item-page__description">
          <h1>{item.title}</h1>

          <p>{item.description}</p>

          <div className="item-page__tags">
            <strong>Категория:</strong>

            <Link to={`/categories/${item.category.slug}`}>
              {item.category.title}
            </Link>
          </div>

          <div className="item-page__order">
            <span className="item-page__price">Цена: {`${item.price} ₴`}</span>

            <Button className="item-page__order-btn">Купить</Button>
          </div>

          <Tabs
            className="item-page__tabs"
            list={tabs}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  item: state.items.current
});

const mapDispatchToProps = {
  getItem
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
