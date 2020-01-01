import React from "react";
import classNames from "classnames";

import "./styles/index.scss";

// ---

const Container = ({ children, className } ) => {
  return (
    <div className={classNames("container", className)}>
      {children}
    </div>
  );
}

export default Container;
