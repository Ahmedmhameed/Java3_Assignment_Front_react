import React from "react";

export default function HeaderNav({ pageName }) {
  return (
    <nav
      className="navbar navbar-header navbar-expand-lg"
      data-background-color="blue2"
    >
      <div className="container-fluid">
        <h1 className="text-white heading">{pageName}</h1>
      </div>
    </nav>
  );
}
