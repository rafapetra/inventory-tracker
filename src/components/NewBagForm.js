import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewBagForm(props){

  function handleNewBagFormSubmission(event) {
    event.preventDefault();
    props.onNewBagCreation({
      coffee: event.target.coffee.value, 
      roast: event.target.roast.value, 
      amount: "130",
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewBagFormSubmission}>

        <label for="coffee">Select Coffee Type:</label>
        <select id="coffee" name="coffee">
          <option value="Brazilian">Brazilian</option>
          <option value="Colombian">Colombian</option>
        </select><br></br>

        <label for="roast">Select Roast Type:</label>
        <select id="roast" name="roast">
          <option value="Light">Light</option>
          <option value="Medium">Medium</option>
          <option value="Dark">Dark</option>
        </select><br></br>

        <button type='submit'>Add New Bag</button>
      </form>
    </React.Fragment>
  );
}

NewBagForm.propTypes = {
  onNewBagCreation: PropTypes.func
};

export default NewBagForm;