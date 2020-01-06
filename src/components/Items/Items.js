import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import Item from "../Item/Item";
import { getItems } from "../../actions/items.action";

import "./styles/index.scss";

// ---

class Items extends React.Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items, className } = this.props;

    if (!items) {
      return null;
    }

    return (
      <ul className={classNames("items", className)}>
        {items.map(item => {
          return <Item key={item.id} item={item} />;
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = {
  getItems
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
