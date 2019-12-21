import React from "react";

import Layout from "../../Layout/Layout";
import Items from "../../Items/Items";

import "./styles/index.scss";

// ---

const HomePage = () => {
  return (
    <div className="home-page">
      <Layout>
        <Items />
      </Layout>
    </div>
  );
}

export default HomePage;
