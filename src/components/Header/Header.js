import React from "react";

import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";

import "./styles/index.scss";

// ---

const Header = () => {
  return (
    <header className="header">
      <Container className="header__container">
        <img src="https://via.placeholder.com/150x70" alt="Logo" />
        <Navigation />
      </Container>
    </header>
  );
}

export default Header;
