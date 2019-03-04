import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { OperatorAttributeselector } from "./OperatorAttributeselector";

const Options = ["CVS Pharmacy", "Walgreens", "Walmart", "Rite Aid"];

const QueryCust = props => {
  var selected = [];
  return (
    <div className="row">
      <div className="col col-sm-3">
        <Typeahead
          // TODO research when API is done on this onSearch={this.handleSearch}
          clearButton
          multiple
          limit
          options={Options}
          clear
          onChange={s => {
            selected = s;
          }}
          placeholder="Select a Value..."
        />
      </div>
      <OperatorAttributeselector
        handleoperatorattribute={props.handleoperatorattribute}
      />

      <div className="col-sm-auto">
        <button
          href="#"
          className="btn btn-info btn-lg"
          onClick={() => {
            props.handlecustomerClick(selected);
          }}
        >
          <span className="glyphicon glyphicon-plus" />
        </button>
      </div>
    </div>
  );
};

export default QueryCust;
