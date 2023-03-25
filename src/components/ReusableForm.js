import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>

      <label htmlFor="coffee">Select Coffee Type:</label>
        <select id="coffee" name="coffee">
          <option value="Brazilian">Brazilian</option>
          <option value="Colombian">Colombian</option>
        </select><br></br>

        <label htmlFor="roast">Select Roast Type:</label>
        <select id="roast" name="roast">
          <option value="Light">Light</option>
          <option value="Medium">Medium</option>
          <option value="Dark">Dark</option>
        </select><br></br>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;