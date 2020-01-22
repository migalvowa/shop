import React from "react";

import Container from "../base/Container/Container";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import "./styles/index.scss";

// ---

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />

      <main className="layout__main">
        <Container>
          {children}
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
