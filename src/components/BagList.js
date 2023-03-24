import React from "react";
import Bag from "./Bag";
import PropTypes from "prop-types";

function BagList(props){
  return (
    <React.Fragment>
    {props.bagList.map((bag, index) =>
      <Bag           
      coffee={bag.coffee}
      roast={bag.roast}
      amount={bag.amount}
      key={index} />
    )}
  </React.Fragment>
  );
}

BagList.propTypes = {
  bagList: PropTypes.array,
};

export default BagList;