import React from "react";
import img from "./logo.svg";
export default function Logo() {
  return (
    <div className="logo">
      <img src={img} alt="navbar brand" className="navbar-brand" />
    </div>
  );
}
