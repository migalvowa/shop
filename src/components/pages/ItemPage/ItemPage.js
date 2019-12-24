import React, { useEffect } from "react";
import {useParams} from "react-router-dom";
import { connect } from 'react-redux';

import { getItem } from "../../../actions/items.action";

import "./styles/index.scss";

// ---

const ItemPage = ({getItem, item}) => {
  let { slug } = useParams();

  useEffect(() => {
    getItem(slug);
  }, []);

  if (!item) {
    return null;
  }

  return (
    <div className="item-page">
      <h1>{item.description}</h1>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    item: state.item
  };
};

const mapDispatchToProps = {
  getItem
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
