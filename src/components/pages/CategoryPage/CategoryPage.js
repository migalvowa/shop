import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import Item from "../../Item/Item";
import { getItems } from "../../../actions/items.action";
import { getCategory } from "../../../actions/categories.action";

import "./styles/index.scss";

// ---

const CategoryPage = ({ getItems, getCategory, items, category }) => {
  const { slug } = useParams();

  useEffect(() => {
    getItems();
    getCategory(slug);
  }, []);

  if (!category) {
    return null;
  }

  const categoryItems = items.filter(item => item.category.slug === slug);

  const breadcrumbsItems = [
    { title: "Каталог", slug: "/categories" },
    { title: category.title }
  ];

  return (
    <div className="category-page">
      <Breadcrumbs items={breadcrumbsItems} />

      <h1>{category.title}</h1>

      <ul className="category-page__items">
        {categoryItems.map(item => {
          return (
            <Item
              key={item.id}
              item={item}
            />
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  items: state.items.list,
  category: state.categories.current
});

const mapDispatchToProps = {
  getItems,
  getCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
