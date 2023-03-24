import React from "react";
import PropTypes from "prop-types";

function Bag(props){
  return (
    <React.Fragment>
      <h3>{props.coffee} - {props.roast} - {props.amount}</h3>
      <hr/>
    </React.Fragment>
  );
}

Bag.propTypes = {
  coffee: PropTypes.string,
  roast: PropTypes.string,
  amount: PropTypes.number
};

export default Bag;