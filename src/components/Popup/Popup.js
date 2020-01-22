import React from "react";
import classNames from "classnames";

import "./styles/index.scss";

// ---

const Popup = ({ className, children }) => {
  return (
    <div className={classNames("popup", className)}>
      <Button className="close">
        X
      </Button>

      {children}
    </div>
  );
};

export default Popup;
