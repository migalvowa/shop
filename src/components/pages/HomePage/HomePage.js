import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { CSSTransitionGroup } from "react-transition-group";

import { getCategories } from "../../../actions/categories.action";
import { getItems } from "../../../actions/items.action";
import Category from "../../Category/Category";
import Item from "../../Item/Item";

import "./styles/index.scss";

// ---

const HomePage = ({ getCategories, getItems, categories, items }) => {
  useEffect(() => {
    getCategories();
    getItems();
  }, []);

  const popularCategories = categories.filter(category => category.is_popular);

  const popularItems = items.filter(item => item.is_popular);

  return (
    <div className="home-page">
      <section>
        <h2>Популярные категории</h2>

        <ul className="home-page__categories">
          <CSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={8000}
            transitionEnter={false}
            transitionLeave={false}
          >
            {popularCategories.map(category => {
              return (
                <Category
                  key={category.id}
                  category={category}
                />
              );
            })}
          </CSSTransitionGroup>
        </ul>

        <Link className="link" to="/categories">Все категории</Link>
      </section>

      <section className="home-page__items-holder">
        <h2>Популярные товары</h2>

        <ul className="home-page__items">
          {popularItems.map(item => {
            return (
              <Item
                key={item.id}
                item={item}
              />
            );
          })}
        </ul>

        <Link className="link" to="/items">Все товары</Link>
      </section>
    </div>
  );
};

const mapStateToProps = state => ({
  categories: state.categories.list,
  items: state.items.list
});

const mapDispatchToProps = {
  getCategories,
  getItems
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
