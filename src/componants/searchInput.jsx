import React from "react";

export default function SearchBar({ value, setValue, label, placeholder }) {
  return (
    <>
      <div className="form-group">
        <label htmlFor="search">{label}</label>
        <div className="input-icon">
          <input
            type="search"
            className="form-control"
            name="searchValue"
            value={value}
            id="search"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            placeholder={placeholder}
          />
          <span className="input-icon-addon">
            <i className="fa fa-search"></i>
          </span>
        </div>
      </div>
    </>
  );
}
