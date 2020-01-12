import React, { useEffect } from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import { getCategories } from "../../actions/categories.action";
import Category from "../Category/Category";

import "./styles/index.scss";

// ---

const Categories = ({ getCategories, categories, className }) => {
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <ul className={classNames("categories", className)}>
      {categories.map(category => {
        return (
          <Category
            key={category.id}
            category={category}
          />
        );
      })}
    </ul>
  );
};

const mapStateToProps = state => ({
  categories: state.categories.list
});

const mapDispatchToProps = {
  getCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
