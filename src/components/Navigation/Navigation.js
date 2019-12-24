import React from "react";
import { Link } from 'react-router-dom';

import "./styles/index.scss";

// ---

const Navigation = () => {
  return (
    <ul className="navigation">
      <li className="navigation__item">
        <Link to="/">Home</Link>
      </li>
      <li className="navigation__item">
        <Link to="/item">Item</Link>
      </li>
    </ul>
  );
}

export default Navigation;
