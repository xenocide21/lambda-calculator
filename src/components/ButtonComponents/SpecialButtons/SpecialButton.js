import React from "react";

const SpecialButton = (props) => {
  const {label} = props;
  return (
      <button>
        {label}
      </button>
  );
};

export {SpecialButton}