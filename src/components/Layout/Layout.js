import React from "react";

import Container from "../Container/Container";
import Header from "../Header/Header";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import Footer from "../Footer/Footer";

import "./styles/index.scss";

// ---

const Layout = ({ children, isHomePage }) => {
  return (
    <div className="layout">
      <Header />

      <main className="layout__main">
        <Container>
          {!isHomePage && <Breadcrumbs />}

          {children}
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
