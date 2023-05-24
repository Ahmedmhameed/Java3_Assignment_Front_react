import React from "react";
import LogoHeader from "./logoHeader";
import HeaderNav from "./headerNav";

export default function index({ clickedNav }) {
  return (
    <div className="main-header">
      <LogoHeader />
      <HeaderNav pageName={clickedNav} />
    </div>
  );
}
