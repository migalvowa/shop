import React from "react";

import classNames from "classnames";

import "./styles/index.scss";

// ---

const Button = ({ children, type, className, standard, ...rest } ) => {
  return (
    <button
      type={type}
      className={classNames("btn", className, {
        "btn--default": standard
      })}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  standard: true,
};

export default Button;
