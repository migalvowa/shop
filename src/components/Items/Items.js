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
    const { items, className, searchValue } = this.props;

    const filteredItems = items.filter(item => {
      return (
        item.title.includes(searchValue)
      );
    });

    return (
      <ul className={classNames("items", className)}>
        {filteredItems.map(item => {
          return (
            <Item key={item.id} item={item} />
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items.list,
  searchValue: state.search.searchValue
});

const mapDispatchToProps = {
  getItems
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
