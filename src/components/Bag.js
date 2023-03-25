import React from "react";
import PropTypes from "prop-types";

function Bag(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenBagClicked(props.id)}>
      Type of coffe: {props.coffee} <br></br>
      Roast: {props.roast} <br></br>
      Amount: {props.amount} pounds
      <hr/>
      </div>
    </React.Fragment>
  );
}

Bag.propTypes = {
  coffee: PropTypes.string,
  roast: PropTypes.string,
  amount: PropTypes.number,
  id: PropTypes.string,
  whenBagClicked: PropTypes.func
};

export default Bag;