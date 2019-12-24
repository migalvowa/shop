import React from "react";
import { connect } from 'react-redux';

import Item from "../Item/Item";
import { getItems } from "../../actions/items.action";

import "./styles/index.scss";

// ---

class Items extends React.Component {
  state = { items: {} }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    const items = this.props.list;

    if (!items) {
      return null;
    }

    return (
      <ul className="items">
        {Object.entries(items).map(([i, item]) => {
          return (
            <Item
              key={i}
              item={item}
            />
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.items
  };
};

const mapDispatchToProps = {
  getData: getItems
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
