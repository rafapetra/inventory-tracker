import React, { useState } from "react";
import PropTypes from "prop-types";

function BagDetail(props){
  const { bag } = props;

  const [amount, setAmount] = useState(bag.amount);

  const subtractFive = () => {
    if (amount > 0) {
      const updatedBag = {
        ...bag,
        amount: amount - 1
      };
      props.onUpdateBag(updatedBag);
      setAmount(updatedBag.amount);
    }
  }

  return (
    <React.Fragment>
      <h1>Bag Detail</h1>
      Type of coffee: {bag.coffee} <br></br>
      Roast: {bag.roast} <br></br>
      Amount: {amount} pounds
      <hr/>

      <button onClick={ props.onClickingEdit }>Update Bag</button>
      <button onClick={ subtractFive }>Sell One Pound</button>
    </React.Fragment>
  );
}

BagDetail.propTypes = {
  bag: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onUpdateBag: PropTypes.func
};

export default BagDetail;
