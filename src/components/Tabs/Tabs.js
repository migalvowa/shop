import React, { useState } from "react";
import classNames from "classnames";

import Button from "../base/Button/Button";

import "./styles/index.scss";

// ---

const Tabs = ({ className }) => {
  const [tab, setTab] = useState(0);

  return (
    <div className={classNames("tabs", className)}>
      <ul className="tabs__nav">
        <li
          className={classNames("tabs__nav-item", {
            "tabs__nav-item--active": tab === 0
          })}
        >
          <Button className="tabs__nav-item-btn" onClick={() => setTab(0)}>
            Доставка
          </Button>
        </li>

        <li
          className={classNames("tabs__nav-item", {
            "tabs__nav-item--active": tab === 1
          })}
        >
          <Button className="tabs__nav-item-btn" onClick={() => setTab(1)}>
            Оплата
          </Button>
        </li>
      </ul>

      <div className="tabs__panel">
        {tab === 0 && (
          <div className="tabs__panel-item">
            <p><strong>Доставка</strong> осуществялется разными способами:</p>

            <ul>
              <li>- Пешком</li>
              <li>- Бегом</li>
              <li>- Самолетом</li>
            </ul>
          </div>
        )}

        {tab === 1 && (
          <div className="tabs__panel-item">
            <p><strong>Оплата</strong> осуществялется разными способами:</p>

            <ul>
              <li>- Наличными</li>
              <li>- Переводом</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
