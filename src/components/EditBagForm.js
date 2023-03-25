import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditBagForm (props) {
  const { bag } = props;

  function handleEditBagFormSubmission(event) {
    event.preventDefault();
    props.onEditBag({      
      coffee: event.target.coffee.value, 
      roast: event.target.roast.value, 
      amount: bag.amount,
      id: bag.id
    });
  }
  
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditBagFormSubmission} 
        buttonText="Update Bag" />
    </React.Fragment>
  );
}

EditBagForm.propTypes = {
  bag: PropTypes.object,
  onEditBag: PropTypes.func
};

export default EditBagForm;