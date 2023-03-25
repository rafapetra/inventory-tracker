import React from "react";
import PropTypes from "prop-types";

function BagDetail(props){
  const { bag } = props;

  return (
    <React.Fragment>
      <h1>Bag Detail</h1>
      Type of coffe: {bag.coffee} <br></br>
      Roast: {bag.roast} <br></br>
      Amount: {bag.amount} pounds
      <hr/>

      
    </React.Fragment>
  );
}


 BagDetail.propTypes = {
  bag: PropTypes.object
};

export default BagDetail;