import React from "react";
import PropTypes from "prop-types";

function Bag(props){
  return (
    <React.Fragment>
      Type of coffe: {props.coffee} <br></br>
      Roast: {props.roast} <br></br>
      Amount: {props.amount} pounds
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