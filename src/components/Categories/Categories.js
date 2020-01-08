import React, { useEffect } from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import { getCategories } from "../../actions/categories.action";

import "./styles/index.scss";

// ---

const Categories = ({ getCategories, categories, className }) => {
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <ul className={classNames("categories", className)}>
      {categories.map(item => {
        return (
          <li key={item.id}>
            {item.title}
          </li>
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
