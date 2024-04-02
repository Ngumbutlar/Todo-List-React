import React from "react";

/**
 * A form component
 * @param {*} inputValue The input state to track
 * @param {*} handleInputChange The change handler
 * @param {*} handleformSubmit The form submit handler
 * @returns form element
 */
function Form({ inputValue, handleInputChange, handleformSubmit }) {
  return (
    <form
      className="row align-content-center justify-content-center g-3"
      onSubmit={handleformSubmit}
    >
      <div className="col-auto">
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Add Task"
          value={inputValue}
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="col-auto">
        <button className="btn" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

export default Form;
