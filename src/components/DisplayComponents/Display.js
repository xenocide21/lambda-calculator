import React from "react";

const Display = (props) => {
  const {data} = props;
  return <div className="display">{data}</div>;
};

export {Display};