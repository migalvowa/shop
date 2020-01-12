import React from "react";
import { Link } from "react-router-dom";

import Container from "../Container/Container";
import Search from "../Search/Search";
import Navigation from "../Navigation/Navigation";

import "./styles/index.scss";

// ---

const Header = () => {
  return (
    <header className="header">
      <Container className="header__container">
        <Link to="/">
          <img src="https://via.placeholder.com/150x70" alt="Logo" />
        </Link>

        <Navigation />

        <Search />
      </Container>
    </header>
  );
};

export default Header;
