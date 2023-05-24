import React from "react";

export default function ContentContainer(props) {
  return (
    <div className="main-panel">
      <div className="content p-30">{props.children}</div>
    </div>
  );
}
