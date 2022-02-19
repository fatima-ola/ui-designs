import React from "react";

const Button = (props) => {
    const { title, onClick,className,  ...rest } = props;
  return (
    <button  className={className} {...rest}>
      <em>{props.children}</em>
    </button>
  );
};

export default Button;
