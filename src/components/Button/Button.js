import React from "react";

import classNames from "classnames";

import "./styles/index.scss";

// ---

const Button = ({ children, type, className, standard, ...props } ) => {
  return (
    <button
      type={type}
      className={classNames("btn", className, {
        "btn--default": standard
      })}
      {...props}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  standard: true
};

export default Button;
