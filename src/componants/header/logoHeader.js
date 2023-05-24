import React from "react";
import Logo from "./logo.js";
import Toggle from "./toggle.js";
export default function LogoHeader() {
  return (
    <div className="logo-header" data-background-color="blue2">
      <Logo />
      <Toggle />
    </div>
  );
}
