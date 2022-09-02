// single Tab that holds the content.

import React from "react";

const Tab = props => {
  return (
    <div className={props.isActive ? "tab active" : "tab"}>
      {props.children}
    </div>
  );
};

export default Tab;
