import React from "react";

export const OperatorAttributeselector = props => {
  return (
    <div className="col-sm-2">
      <select
        id="operatoroption"
        className="browser-default camp-select"
        onChange={props.handleoperatorattribute}
      >
        <option defaultValue>Choose An Operation..</option>
        <option value="included">Include</option>
        <option value="excluded">Exclude</option>
      </select>
    </div>
  );
};
