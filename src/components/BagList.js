import React from "react";
import Bag from "./Bag";
import PropTypes from "prop-types";
import './BagList.css';


function BagList(props){
  return (
    <div className="bagList">

    <React.Fragment>
    {props.bagList.map((bag) =>
      <Bag   
      whenBagClicked= { props.onBagSelection }        
      coffee={bag.coffee}
      roast={bag.roast}
      amount={bag.amount}
      id={bag.id}
      key={bag.id} />
    )}
  </React.Fragment>    </div>


  );
}

BagList.propTypes = {
  bagList: PropTypes.array,
  onBagSelection: PropTypes.func
};

export default BagList;