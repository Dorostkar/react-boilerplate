import React from "react";
import PropTypes from "prop-types";

const SelectInput = ({name, label, onChange ,defaultOption, value, error, options}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select
          className="form-control"
          name={name}
          value={value}
           onChange={onChange}
        >
          <option value="">{defaultOption}</option>
          {options.map(option => {
            return (
              <option key={option.key} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
    name:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    defaultOption:PropTypes.string,
    value:PropTypes.string,
    error:PropTypes.string,
    options:PropTypes.arrayOf(PropTypes.object)
};
export default SelectInput;