import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

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

  const filteredItems = items.filter(item => {
    return (
      item.category.slug === slug
    );
  });

  return (
    <div className="category-page">
      <h1>{category.title}</h1>

      <ul className="items">
        {filteredItems.map(item => {
          return (
            <Item key={item.id} item={item} />
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
