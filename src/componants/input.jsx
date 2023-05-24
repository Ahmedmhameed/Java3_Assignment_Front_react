import React from "react";

export default function Input({
  type,
  name = "",
  label,
  placeholder,
  value = "",
  onChange,
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className="form-control"
        id={name}
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
