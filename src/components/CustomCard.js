import React from "react";

const CustomCard = (props) => {
  const { ...rest } = props;
  return (
    <div className="card label-card" {...rest}>
      {props.children}
    </div>
  );
};

export default CustomCard;
