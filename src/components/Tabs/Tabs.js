import React, { useState } from "react";
import classNames from "classnames";

import Button from "../base/Button/Button";

import "./styles/index.scss";

// ---

const Tabs = ({ className, list }) => {
  const [tab, setTab] = useState(0);

  return (
    <div className={classNames("tabs", className)}>
      <ul className="tabs__nav">
        {list.map((item, index) => {
          return (
            <li
              className={classNames("tabs__nav-item", {
                "tabs__nav-item--active": tab === index
              })}
            >
              <Button
                className="tabs__nav-item-btn"
                onClick={() => setTab(index)}
              >
                {item.title}
              </Button>
            </li>
          );
        })}
      </ul>

      <div className="tabs__panel">
        {list.map((item, index) => {
          return (
            <div className="tabs__panel-item">
              {tab === index && item.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
