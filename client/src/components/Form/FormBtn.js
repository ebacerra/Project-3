import React from "react";

export const FormBtn = props => (
  <button
    {...props}
    style={{ float: "right", marginBottom: 8 }}
    className="btn btn-primary btn-lg btn-block"
  >
    {props.children}
  </button>
);
