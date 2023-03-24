import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewBagForm(props){

  function handleNewBagFormSubmission(event) {
    event.preventDefault();
    props.onNewBagCreation({
      coffee: event.target.coffee.value, 
      roast: event.target.roast.value, 
      amount: parseInt(event.target.amount.value), 
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewBagFormSubmission}>
        <input
          type='text'
          name='coffee'
          placeholder='Type of Coffee' />
        <input
          type='text'
          name='roast'
          placeholder='Roast' />
        <input
          type='number'
          name='amount'
           />
        <button type='submit'>Add New Bag</button>
      </form>
    </React.Fragment>
  );
}

NewBagForm.propTypes = {
  onNewBagCreation: PropTypes.func
};

export default NewBagForm;